const mongoose = require("mongoose");
const crypto = require("crypto");

const receptorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    hospital: {
        type: String,
        required: true,
    },
    units: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    mailId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "URGENT",
    },
    referenceId: {
        type: String,
        default: "#"+crypto.randomBytes(4).toString('hex'),
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
    }  
});

module.exports = mongoose.model("Receptor",receptorSchema);