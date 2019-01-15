const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const routes = require("./routes");
const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost/mybooksearch"

// const Books = require('./routes/api/books')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

app.use(routes)

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

mongoose
    .connect(CONNECTION_URI, {
        useMongoClient: true
    }) 
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Bodyparser middleware
// app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

