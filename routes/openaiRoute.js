const express = require("express");
const router = express.Router();
const openaiController = require("../controller/RestAiController");

router.route("/send").post(openaiController.askQuestion);

module.exports = router;
