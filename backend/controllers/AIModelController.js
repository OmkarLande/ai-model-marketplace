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
  } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. No token provided" });
  }

  try {
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
      !req.file
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const file = req.file;
    const uploadResponse = await cloudinary.uploader.upload(file.path, {
        resource_type: 'auto',
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
        return res.status(404).json({ error: 'AI model not found' });
      }
  
      res.status(200).json(aiModel);
    } catch (error) {
      console.error('Error fetching AI model by ID:', error);
      res.status(500).json({ error: 'Failed to fetch AI model by ID' });
    }
  };

module.exports = { createModel, getAllAIModels, getAIModelById };

