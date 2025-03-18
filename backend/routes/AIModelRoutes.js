const express = require("express");
const multer = require('multer');
const { createModel, getAllAIModels, getAIModelById } = require("../controllers/AIModelController");

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post("/create", upload.single('model_file.py'), createModel);
router.get("/ai-models", getAllAIModels);
router.get("/ai-models/:id", getAIModelById);

module.exports = router;
