import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import ModelCard from "../components/ModelCard";
import { FaBars } from "react-icons/fa";

// Sidebar menu items for contributors
const menuItems = [
  { label: "Contribute to Model", path: "/contribute-model" },
  { label: "Previous Contributions", path: "/previous-contributions" },
  { label: "Active Contributions", path: "/active-contributions" },
];

const ContributeToModel = () => {
  // State to control sidebar visibility for mobile
  const [showSidebar, setShowSidebar] = useState(false);

  // Dummy models data (replace with API data later)
  const [models] = useState([
    {
      id: 1,
      name: "Sentiment Analysis Model",
      description:
        "A model that analyzes sentiment from text using natural language processing.",
      price: "Free",
      category: "NLP",
    },
    {
      id: 2,
      name: "Image Classification Model",
      description:
        "Classifies images into multiple categories with high accuracy.",
      price: "Premium",
      category: "Computer Vision",
    },
    {
      id: 3,
      name: "Fraud Detection Model",
      description: "Detects fraudulent transactions in real-time using AI.",
      price: "Free",
      category: "Finance",
    },
    {
      id: 4,
      name: "Stock Price Prediction Model",
      description:
        "Predicts stock prices using historical data and machine learning.",
      price: "Premium",
      category: "Finance",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for Large Screens and Mobile */}
      <Sidebar
        menuItems={menuItems}
        heading="Contributor Dashboard"
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setShowSidebar(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-md"
      >
        <FaBars size={24} />
      </button>

      {/* Main Content Section */}
      <div className="flex-1 lg:ml-64 p-6 md:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Contribute to Models 🚀
          </h2>

          {/* Model List */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Available Models 📚
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => (
                <div
                  key={model.id}
                  className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {model.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{model.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 font-semibold">
                      {model.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {model.category}
                    </span>
                  </div>

                  {/* Button to contribute */}
                  <button
                    onClick={() =>
                      alert(`You chose to contribute to ${model.name}`)
                    }
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  >
                    Contribute
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeToModel;
