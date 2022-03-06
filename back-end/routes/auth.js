const express = require("express");

const router = express.Router();

const { cloudinary } = require("../config/cloudinary");
const authenticateToken = require("../middleware/authenticateToken");

const Donor = require("../models/Donor");
const brcrypt = require("bcrypt");
const FeedBack = require("../models/FeedBack");

router.post("/register", async (req, res) => {
  try {
    const len = await Donor.findByEmail(req.body.email);
    if(await len.length>0){
        return res.status(400).send({error: "mail id already exists"});
    }
    const profileImg = req.body.profileImg;
    const idImg = req.body.idImg;
    const profileResponse = await cloudinary.uploader.upload(profileImg, {
      upload_preset: "ml_default",
    });
    const idResponse = await cloudinary.uploader.upload(idImg, {
      upload_preset: "ml_default",
    });
    const donor = req.body;
    donor.profileImg = profileResponse.url;
    donor.idImg = idResponse.url;
    const donorObj = Donor(donor);
    const id = await donorObj.save();
    const token = await Donor.generateToken({_id: id._id});
    donorObj.token = token;
    donorObj.save();
    res.json({token: token});
  } catch (error) {
      console.log(error);
    res.status(400).send({ error: "Couldn't register" });
  }
});

router.post("/login",authenticateToken,async (req,res) => { 
  try{
  if(req.token===undefined){
    const donor = await Donor.findOne({email: req.body.email},{email: true,_id: true,password: true});
    if(donor===null){
      return res.status(400).send({error: "user doesn't exist"});
    }
    if(await brcrypt.compare(req.body.password,donor.password)===false){
      return res.status(400).send({error: "password doesn't match"});
    }
    const token = await Donor.generateToken({_id: donor._id});
    donor.token = token;
    await donor.save();
    return res.send({token: token});
  }
  else{
    return res.send({token: req.token});
  }
}
catch(error){
  res.status(400).send({error: "couldnt login"});
}
});

router.post("/logout",authenticateToken,async (req,res) => {
  try{
    req.donor.token = undefined;
    await req.donor.save();
    res.status(200).send({message: "logged out successful"});
  }
  catch(error){
    res.status(400).send({error: "couldn't logout"})
  }
});


router.post("/feedback",async (req,res) => {
  try{
    const feed = FeedBack(req.body);
    await feed.save();
    res.status(200).send({message: "Thank You for your feedback"});
  }
  catch(error){
    res.status(400).send({error: "Failed sending feedback!"});
  }
});


module.exports = router;
