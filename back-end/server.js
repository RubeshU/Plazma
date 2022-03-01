const express = require('express');
const bodyParser = require("body-parser");
const MongoConnect = require("./config/MongoConnect");
const cors = require("cors");
const receptorRoute = require("./routes/receptor");
const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor");

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

const app = express();
const port = 4000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use(cors(corsOptions));

app.use("/plazma/receptor",receptorRoute);
app.use("/plazma/auth",authRoute);
app.use("/plazma/donor",donorRoute);

app.listen(port, async () => {
    await MongoConnect();
    console.log(`App listening at http://localhost:${port}`);
});