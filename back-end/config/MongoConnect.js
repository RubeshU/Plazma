const mongoose = require("mongoose");
require("dotenv").config();

const MongoConnect = async () => {
  try {
    mongoose.connect(
        process.env.MONGO_DB_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = MongoConnect;
