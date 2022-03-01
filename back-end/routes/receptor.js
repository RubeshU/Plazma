const express = require("express");

const router = express.Router();

const Receptor = require("../models/Receptor");

router.post("/request",async (req,res) => {
    try{
    const receptor = Receptor(req.body.receptor);
    const response = await receptor.save();
    res.send({referenceId: response.referenceId});
    }
    catch(error){
        res.status(400).send({error: "not found"});
    }
});

router.post("/check",async (req,res) => {
    try{
    const response = await Receptor.findOne({referenceId: req.body.referenceId});
    if(response===null){
        throw Error();
    }
    const result ={
        name: response.name,
        age: response.age,
        bloodType: response.bloodType,
        date: response.date,
        units: response.units,
        hospital: response.hospital,
        status: response.status,
    }
    res.status(200).json(result);
    }
    catch(error){
        res.status(400).send({error: "Receptor not found"});
    }
});


router.get("/live-requests",async (req,res) => {
    try{
        const response = await Receptor.find(
          {},
          {
            _id: true,
            name: true,
            age: true,
            bloodType: true,
            city: true,
            hospital: true,
            status: true,
            units: true,
            description: true,
          }
        );
        res.json(response);
    }
    catch(error){
        res.status(400).send({error: "Receptors not found!"});
    }
});

module.exports = router;