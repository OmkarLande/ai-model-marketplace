import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ModelDetails = () => {
  const { id } = useParams(); // Get model ID from URL
  const navigate = useNavigate();

  // Dummy model data
  const [model, setModel] = useState(null);

  const modelData = [
    {
      id: 1,
      name: "AI Image Enhancer",
      description: "Enhance image resolution using deep learning models.",
      price: "$10/month",
      category: "Image Processing",
      features: ["High-Resolution Output", "Low Latency", "Cloud API Access"],
    },
    {
      id: 2,
      name: "Text Sentiment Analyzer",
      description: "Analyze and predict sentiment from text data.",
      price: "$15/month",
      category: "NLP",
      features: ["Real-Time Analysis", "Multi-Language Support", "API Access"],
    },
    {
      id: 3,
      name: "Document Analyzer",
      description: "Analyze documents and extract valuable insights with AI.",
      price: "$12/month",
      category: "Document Processing",
      features: ["OCR Integration", "PDF & DOC Support", "Custom Analysis"],
    },
    {
      id: 4,
      name: "Voice Recognition System",
      description: "Identify and process voice inputs accurately.",
      price: "$20/month",
      category: "Speech AI",
      features: ["High Accuracy", "Real-Time Transcription", "Voice Commands"],
    },
  ];

  // Fetch model based on ID when component loads
  useEffect(() => {
    const selectedModel = modelData.find((item) => item.id === parseInt(id));
    if (selectedModel) {
      setModel(selectedModel);
    } else {
      navigate("/marketplace"); // Redirect if model not found
    }
  }, [id, navigate]);

  if (!model) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white text-2xl">Loading model details...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      {/* Model Details Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
          {model.name}
        </h2>

        {/* Model Description */}
        <p className="text-gray-300 text-lg text-center mb-6">
          {model.description}
        </p>

        {/* Feature List */}
        <div className="bg-gray-800/90 p-6 rounded-lg shadow-xl text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            {model.features.map((feature, index) => (
              <li key={index} className="text-gray-400">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Category */}
        <div className="flex justify-between items-center bg-gray-700/90 p-6 rounded-lg shadow-xl w-full">
          <p className="text-xl font-semibold text-blue-400">
            Price: {model.price}
          </p>
          <p className="text-lg text-gray-400">Category: {model.category}</p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/marketplace")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
