const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({ message: "HELLO" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});