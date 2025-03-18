import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();

  const [models, setModels] = useState([
    {
      id: 1,
      name: "AI Image Enhancer",
      description: "Enhance image resolution using deep learning models.",
      price: "$10/month",
      category: "Image Processing",
    },
    {
      id: 2,
      name: "Text Sentiment Analyzer",
      description: "Analyze and predict sentiment from text data.",
      price: "$15/month",
      category: "NLP",
    },
    {
      id: 3,
      name: "Document Analyzer",
      description: "Analyze documents and extract valuable insights with AI.",
      price: "$12/month",
      category: "Document Processing",
    },
    {
      id: 4,
      name: "Voice Recognition System",
      description: "Identify and process voice inputs accurately.",
      price: "$20/month",
      category: "Speech AI",
    },
  ]);

  const bgColors = ["bg-blue-600/10", "bg-green-600/10", "bg-purple-600/10"];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      {/* Marketplace Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          Explore AI Models
        </h2>

        {/* Model List in Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {models.map((model, index) => (
            <div
              key={model.id}
              onClick={() => navigate(`/model/${model.id}`)}
              className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Model Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {model.name}
              </h3>

              {/* Model Description */}
              <p className="text-gray-400 mb-4">{model.description}</p>

              {/* Model Price & Category */}
              <div className="flex justify-between items-center">
                <p className="text-blue-400 font-semibold">{model.price}</p>
                <p className="text-sm text-gray-500">{model.category}</p>
              </div>

              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 ${
                  bgColors[index % bgColors.length]
                } opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
