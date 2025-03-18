const express = require("express");
const { createModel } = require("../controllers/AIModelController");

const router = express.Router();

router.post("/create", createModel);

module.exports = router;
