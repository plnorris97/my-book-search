const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");

// const Books = require('./routes/api/books')

const app = express();

const port = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Bodyparser middleware
// app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://plnorris97:December192015!@ds151354.mlab.com:51354/books-search")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
// Connect to MongoDB
// mongoose
//     .connect(db)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

//Use routes
app.use(routes)

app.listen(port, () => console.log(`Server started on port ${5000}`));

