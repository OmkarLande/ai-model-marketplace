import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getModelById, buyModel } from "../services/modelDetailsService"; // Import service

const ModelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModel = async () => {
      setLoading(true);
      const data = await getModelById(id);
      if (data) {
        setModel(data);
      } else {
        navigate("/marketplace");
      }
      setLoading(false);
    };

    fetchModel();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white text-2xl">Loading model details...</p>
      </div>
    );
  }

  if (!model) {
    return null;
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
          {model.model_name}
        </h2>

        <p className="text-gray-300 text-lg text-center mb-6">
          {model.description}
        </p>

        <div className="bg-gray-800/90 p-6 rounded-lg shadow-xl text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            {model.features?.map((feature, index) => (
              <li key={index} className="text-gray-400">
                {feature}
              </li>
            ))}
            <li className="text-gray-400">
              <strong>Performance Metrics:</strong> {model.performance_metrics}
            </li>
            <li className="text-gray-400">
              <strong>Training Data Info:</strong> {model.training_data_info}
            </li>
            <li className="text-gray-400">
              <strong>Created by:</strong> {model.user?.username || "Unknown"}
            </li>
            <li className="text-gray-400">
              <strong>Version:</strong> {model.version}
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center bg-gray-700/90 p-6 rounded-lg shadow-xl w-full">
          <p className="text-xl font-semibold text-blue-400">
            Price: {model.price || "N/A"}
          </p>
          <p className="text-lg text-gray-400">Category: {model.category || "N/A"}</p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/marketplace")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Back to Marketplace
          </button>
          <button
            onClick={buyModel}
            className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Buy Model
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
