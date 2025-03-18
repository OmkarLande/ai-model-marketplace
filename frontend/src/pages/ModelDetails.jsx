import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaTag,
  FaFileAlt,
  FaCog,
  FaUserCircle,
  FaChartBar,
  FaStar,
} from "react-icons/fa";
import { getModelById, buyModel } from "../services/modelDetailsService";
import { motion } from "framer-motion";

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
        {/* Model Header */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {model.model_name}
        </motion.h2>

        {/* Model Thumbnail */}
        {/* <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={model.thumbnail || "/default-thumbnail.png"}
            alt="Model Thumbnail"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </motion.div> */}

        {/* Model Description */}
        <motion.p
          className="text-gray-300 text-lg text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {model.description || "No description available"}
        </motion.p>

        {/* Model Tags */}
        <div className="flex justify-center space-x-4 mb-8">
          {model.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Features and Model Info */}
        <motion.div
          className="bg-gray-800/90 p-6 rounded-lg shadow-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            {model.features?.length > 0 ? (
              model.features.map((feature, index) => (
                <li key={index} className="text-gray-400">
                  <FaFileAlt className="inline-block mr-2 text-blue-500" />
                  {feature}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No features listed</li>
            )}

            <li className="text-gray-400">
              <strong>Performance Metrics:</strong>{" "}
              {model.performance_metrics || "Not available"}
            </li>
            <li className="text-gray-400">
              <strong>Training Data Info:</strong>{" "}
              {model.training_data_info || "Not provided"}
            </li>
            <li className="text-gray-400">
              <FaUserCircle className="inline-block mr-2 text-blue-400" />
              <strong>Created by:</strong> {model.user?.username || "Unknown"}
            </li>
            <li className="text-gray-400">
              <FaCog className="inline-block mr-2 text-yellow-400" />
              <strong>Version:</strong> {model.version || "Not specified"}
            </li>
          </ul>
        </motion.div>

        {/* Contributor Information */}
        <motion.div
          className="bg-gray-800/90 p-6 rounded-lg shadow-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Contributors:</h3>
          <ul className="space-y-2">
            {model.contributors?.map((contributor, index) => (
              <li key={index} className="text-gray-400 flex items-center">
                <FaUserCircle className="inline-block mr-2 text-green-400" />
                <span>{contributor.name}</span> - Contributions:{" "}
                {contributor.contributions}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Reviews and Ratings */}
        <motion.div
          className="bg-gray-800/90 p-6 rounded-lg shadow-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Reviews:</h3>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 mr-2" />
            <span className="text-lg text-yellow-400 font-semibold">
              {model.rating || "No ratings yet"}
            </span>
          </div>
          {model.reviews?.length > 0 ? (
            model.reviews.map((review, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                <p className="text-gray-300">{review.comment}</p>
                <span className="text-sm text-gray-500">By: {review.user}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No reviews yet</p>
          )}
        </motion.div>

        {/* Pricing and Category */}
        <motion.div
          className="flex justify-between items-center bg-gray-700/90 p-6 rounded-lg shadow-xl w-full mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <p className="text-xl font-semibold text-blue-400">
            <FaTag className="inline-block mr-2" />
            Price: {model.price || "Free"}
          </p>
          <p className="text-lg text-gray-400">
            <FaTag className="inline-block mr-2" />
            Category: {model.category || "Uncategorized"}
          </p>
        </motion.div>

        {/* Actions */}
        <div className="mt-8 text-center space-x-4">
          <motion.button
            onClick={() => navigate("/marketplace")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowLeft className="inline-block mr-2" />
            Back to Marketplace
          </motion.button>
          <motion.button
            onClick={buyModel}
            className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Buy Model
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
