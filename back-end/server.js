const express = require('express');
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const MongoConnect = require("./config/MongoConnect");
const cors = require("cors");
const receptorRoute = require("./routes/receptor");

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

const app = express();
const port = 4000;
const Receptor = require("./models/Receptor");

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors(corsOptions));

app.use("/plazma/receptor",receptorRoute);

app.listen(port, async () => {
    await MongoConnect();
    console.log(`App listening at http://localhost:${port}`);
});