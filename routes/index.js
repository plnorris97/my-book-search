const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// What is this router.use for?
router.use((req, res) =>{
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;