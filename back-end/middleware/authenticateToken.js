const Donor = require("../models/Donor");

const jwt = require("jsonwebtoken");

const authenticateToken = async (req,res,next) => {
    if(req.header("authorization")===undefined){
        return next();
    }
    const authHeader = req.header('authorization');
    const token = authHeader && authHeader.split(" ")[1];
    if(token === undefined) return next();
    const orgId = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    const donor = await Donor.findOne({_id: orgId._id});
    req.donor = donor;
    req.token = token;
    next();
}

module.exports = authenticateToken;