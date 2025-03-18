const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const createModel = async (req, res) => {
  const {
    model_name,
    description,
    version,
    training_data_info,
    performance_metrics,
    license_type,
    model_file_path,
  } = req.body;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the user is a model owner
    if (decoded.role !== "model_owner") {
        return res
        .status(403)
        .json({
            error: "Access denied. Only model owners can create AI models",
        });
    }
    
    // Check required fields
    if (
        !model_name ||
        !description ||
        !version ||
        !training_data_info ||
        !performance_metrics
    ) {
        return res.status(400).json({ error: "All fields are required" });
    }

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

module.exports = { createModel };
