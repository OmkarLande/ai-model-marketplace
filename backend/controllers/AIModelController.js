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
    price,
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
    const uploadResponse = await cloudinary.uploader
      .upload(file.path)
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

const getActiveContributors = async (req, res) => {
  try {
    // Fetch active contributors
    const activeContributors = await prisma.model_Contributor.findMany({
      where: {
        status: "active", // Filter by active contributors
      },
      include: {
        user: {
          // Include user details
          select: {
            user_id: true,
            username: true,
            email: true,
          },
        },
        ai_model: {
          // Include model details
          select: {
            model_id: true,
            model_name: true,
          },
        },
      },
    });

    // Check if no active contributors were found
    if (activeContributors.length === 0) {
      return res.status(404).json({ error: "No active contributors found." });
    }

    // Respond with the active contributors data
    return res.status(200).json(activeContributors);
  } catch (error) {
    // Handle errors and send error response
    console.error("Error fetching active contributors:", error);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
};

const getOwnedModels = async (req, res) => {
  try {
    const { userId } = req.body; // Assuming the user ID is stored in req.user after verifying the token
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Fetch models owned by the user
    const ownedModels = await prisma.aI_Model.findMany({
      where: { user_id: userId }, // Correct field is user_id
      include: {
        user: true, // Optionally, include user info if needed
      },
    });

    if (ownedModels.length === 0) {
      return res.status(404).json({ error: "No owned models found." });
    }

    return res.status(200).json(ownedModels); // Return the owned models to the client
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching owned models." });
  }
};

module.exports = {
  createModel,
  getAllAIModels,
  getAIModelById,
  getActiveContributors,
  getOwnedModels,
};
