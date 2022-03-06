const mongoose = require("mongoose");

const feedBackSchema = mongoose.Schema({
    feedback: {
        type: String,
    }
});

module.exports = mongoose.model("FeedBack",feedBackSchema);