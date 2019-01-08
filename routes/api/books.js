const express = require('express');
const router = express.Router();

const dbController = require("../../controller/dbController");

router.route("/")
  .get(dbController.findAll)
  .post(dbController.create);

router.route("/:id")
  .get(dbController.findById)
  .put(dbController.update)
  .delete(dbController.delete);

module.exports = router;