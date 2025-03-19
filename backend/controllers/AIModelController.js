const { PrismaClient } = require("@prisma/client");
const cloudinary = require("../config/cloudinary");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const createModel = async (req, res) => {
  const {
    model_name,
    description,
    version,
    training_data_info,
    performance_metrics,
    license_type,
    price
  } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. No token provided" });
  }

  try {
    console.log("Form Data:", req.body);
    console.log("Uploaded File:", req.file);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is a model owner
    if (decoded.role !== "model_owner") {
      return res.status(403).json({
        error: "Access denied. Only model owners can create AI models",
      });
    }

    // Check required fields
    if (
      !model_name ||
      !description ||
      !version ||
      !training_data_info ||
      !performance_metrics ||
        !price
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Model file is required" });
    }

    const file = req.file;
    const uploadResponse = await cloudinary.uploader.upload(file.path)
    .then((result) => {
      return result;
    })
      .catch((err) => {
        return res
          .status(500)
          .json({ error: "Cloudinary upload failed", details: err.message });
      });

    const model_file_path = uploadResponse.secure_url;
    console.log("cloudinary url ", model_file_path);

    // Set optional fields to null if not provided
    const optionalFields = {
      license_type: license_type || null,
      model_file_path: model_file_path || null,
    };

    // Create AI model entry
    const newModel = await prisma.aI_Model.create({
      data: {
        user_id: decoded.user_id,
        model_name,
        description,
        version,
        training_data_info,
        performance_metrics,
        price,
        ...optionalFields,
      },
    });
    res
      .status(201)
      .json({ message: "AI Model created successfully", model: newModel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAIModels = async (req, res) => {
  try {
    const aiModels = await prisma.aI_Model.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(aiModels);
  } catch (error) {
    console.error("Error fetching AI models:", error);
    res.status(500).json({ error: "Failed to fetch AI models" });
  }
};

const getAIModelById = async (req, res) => {
  const { id } = req.params;

  try {
    const aiModel = await prisma.aI_Model.findUnique({
      where: { model_id: parseInt(id) },
      include: {
        user: true,
      },
    });

    if (!aiModel) {
      return res.status(404).json({ error: "AI model not found" });
    }

    res.status(200).json(aiModel);
  } catch (error) {
    console.error("Error fetching AI model by ID:", error);
    res.status(500).json({ error: "Failed to fetch AI model by ID" });
  }
};


const uploadContribution = async (req, res) => {
  const { user_id, model_id } = req.body; // Model ID
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file provided" });
  }

  try {
    // Upload file to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(file.path);
    const model_file_path = uploadResponse.secure_url;

    console.log("Cloudinary URL:", model_file_path);

    // Create an entry in the Model_Contributor table
    const contribution = await prisma.model_Contributor.create({
      data: {
        file_path: model_file_path,
        status: "active",
        user: {
          connect: {
            user_id: 12
          }
        },
        ai_model: {
          connect: {
            model_id: 1  // Connect to an existing AI_Model by its model_id
          }
        }
      },
    });

    return res.status(201).json({
      message: "Contribution uploaded successfully",
      contribution,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Failed to upload contribution",
      details: error.message,
    });
  }
};

module.exports = { createModel, getAllAIModels, getAIModelById, uploadContribution };