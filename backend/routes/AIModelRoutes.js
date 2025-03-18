const express = require("express");
const { createModel, getAllAIModels, getAIModelById } = require("../controllers/AIModelController");


const router = express.Router();

router.post("/create", createModel);
router.get("/ai-models", getAllAIModels);
router.get("/ai-models/:id", getAIModelById);

module.exports = router;
