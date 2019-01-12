const path = require("path");
const router = require("express").Router();
const apiroutes =require("./api");

router.use("/api", apiroutes);

// What is this router.use for?
router.use((req, res) =>{
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router;