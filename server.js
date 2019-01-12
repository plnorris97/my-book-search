const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const routes = require("./routes");

// const Books = require('./routes/api/books')

const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes)

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://plnorris97:December192015!@ds151354.mlab.com:51354/books-search")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Bodyparser middleware
// app.use(bodyParser.json());

app.listen(port, () => console.log(`Server started on port ${port}`));

