const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

const Receptor = require("../models/Receptor");

router.post("/donate",authenticateToken,async (req,res) => {
    try{
        if(req.donor.currentDonation!==undefined){
            return res.status(400).send({error: "You already have a pending donation"});
        }
        req.donor.currentDonation = req.body.donorId;
        await req.donor.save();
        const { currentDonation } = await req.donor.populate("currentDonation");
        currentDonation.status = "REGISTERED";
        currentDonation.donor = req.donor._id;
        await currentDonation.save();
        await req.donor.save();
        res.send({message: "Donation registered"});
    }
    catch(error){
        res.status(400).send({error: "couldn't donate"});
    }
});

router.post("/confirm",authenticateToken, async (req,res) => {
    try{
        const { currentDonation:receptor } = await req.donor.populate("currentDonation");
        receptor.status = "FULFILLED";
        const history = {
            name: receptor.name,
            units: receptor.units,
        }
        req.donor.donationHistory.unshift(history);
        req.donor.currentDonation = undefined;
        await req.donor.save();
        await receptor.save();
        res.status(200).send({message: "Donation Success"});
    }
    catch(error){
        res.status(400).send({error: "Confirmation failed"});
    }
});

router.get("/current",authenticateToken,async (req,res) => {
    try{
        const {currentDonation: receptor} = await req.donor.populate("currentDonation");
        if(receptor === undefined){
            throw Error();
        }

        const mRecep = {
            name: receptor.name,
            units: receptor.units,
            hospital: receptor.hospital,
            city: receptor.city,
            mail: receptor.mailId,
            mobileNo: receptor.mobileNo,
            date: receptor.date,
        }

        res.json(mRecep);
    }
    catch(error){
        res.status(400).send({error: "No Current Donation available"});
    }
});

function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

router.get("/profile",authenticateToken,async (req,res) => {
    try{
        if(req.donor === undefined || req.donor===null || req.donor==={}){
            throw Error();
        }
        const date = req.donor.dob.split("-");
        const year = date[0];
        const month = date[1];
        const day = date[2];
        const age = getAge(new Date(year,month,day));
        const donationNo = req.donor.donationHistory.length;
        const eligibility = req.donor.currentDonation !== undefined ? "Not Eligible" : "Eligible";
        const mDonor = {
            name: req.donor.name,
            age: age,
            dob: req.donor.dob,
            bloodGroup: req.donor.bloodGroup,
            donationNo: donationNo,
            city: req.donor.city,
            profileImg: req.donor.idImg,
            eligibility: eligibility,
        };
        res.json(mDonor);
    }
    catch(error){
        res.status(400).send({error: "profile not found"});
    }
});

router.get("/history", authenticateToken, async (req, res) => {
  try {
    if (req.donor.donationHistory.length === 0) {
      throw Error();
    }
    res.json(req.donor.donationHistory);
  } catch (error) {
    res
      .status(400)
      .send({ error: "Currently no history of donations availabe!" });
  }
});

module.exports = router;