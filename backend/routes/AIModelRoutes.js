const express = require("express");
const multer = require('multer');
const { createModel, getAllAIModels, getAIModelById, uploadContribution } = require("../controllers/AIModelController");

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post("/create", upload.single('model_file.py'), createModel);
router.get("/ai-models", getAllAIModels);
router.get("/ai-models/:id", getAIModelById);
router.post("/upload-contribution", upload.single('model_file.py'), uploadContribution);

module.exports = router;
