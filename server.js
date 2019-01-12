const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Books = require('./routes/api/books')

const app = express();

const port = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

//Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/books', Books)

app.listen(port, () => console.log(`Server started on port ${5000}`));

