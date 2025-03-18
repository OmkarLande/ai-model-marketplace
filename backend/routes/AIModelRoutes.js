const express = require("express");
const { createModel, getAllAIModels } = require("../controllers/AIModelController");

const router = express.Router();

router.post("/create", createModel);
router.get("/ai-models", getAllAIModels);

module.exports = router;
