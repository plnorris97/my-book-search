const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const keys = require('./config/keys');

//Bodyparser middleware
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

mongoose
    .connect(keys.MONGODB_URI)
    // .connect(process.env.MONGODB_URI || "mongodb://localhost/mybooksearch")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

