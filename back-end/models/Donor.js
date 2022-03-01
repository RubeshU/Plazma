const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const bcrypt = require("bcrypt");

const donorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        required: true,
    },
    idImg: {
        type: String,
        required: true,
    },
    noOfDonations: {
        type: String,
    },
    currentDonation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receptor",
    },
    token: {
        type: String,
    },
    donationHistory: [{
        name: {
            type: String,
        },
        date : {
            type: Date,
            default: Date.now
        },
        units: {
            type: String,
        }
    }],
});

donorSchema.statics.generateToken = async (obj) => {
    return await jwt.sign(obj,process.env.ACCESS_TOKEN_SECRET);
}

donorSchema.statics.findByEmail = async function(mailId) {
    return await this.find({email: mailId},{email: true});
}

donorSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
});

module.exports = mongoose.model("Donor",donorSchema);