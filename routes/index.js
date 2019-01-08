const path = require("path");
const router = require("express").Router();
const apiroutes =require("./api");

router.use("/api", apiroutes);
router.use((req, res) =>{
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;