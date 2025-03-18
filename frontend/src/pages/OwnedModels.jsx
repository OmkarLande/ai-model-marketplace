// src/pages/OwnedModels.jsx
import React, { useState } from "react";
import { FaDatabase, FaCheckCircle, FaClock, FaBars } from "react-icons/fa";
import Sidebar from "../components/SideBar";
import StatCard from "../components/StatCard";
import ModelCard from "../components/ModelCard";

// Sidebar menu items for model owner
const menuItems = [
  { label: "Create Model", path: "/create-model" },
  { label: "Active Contributors", path: "/active-contributors" },
  { label: "Owned Models", path: "/owned-models" },
];
const OwnedModels = () => {
  // Dummy data for owned models (replace with API data later)
  const [models] = useState([
    {
      id: 1,
      name: "Image Classification",
      status: "Active",
      createdAt: "2024-01-15",
      contributors: 12,
    },
    {
      id: 2,
      name: "Fraud Detection",
      status: "Inactive",
      createdAt: "2023-12-20",
      contributors: 8,
    },
    {
      id: 3,
      name: "Chatbot NLP",
      status: "Active",
      createdAt: "2024-02-10",
      contributors: 15,
    },
    {
      id: 4,
      name: "Stock Price Predictor",
      status: "Pending",
      createdAt: "2024-03-01",
      contributors: 6,
    },
  ]);

  // Calculate stats
  const totalModels = models.length;
  const activeModels = models.filter(
    (model) => model.status === "Active"
  ).length;
  const pendingModels = models.filter(
    (model) => model.status === "Pending"
  ).length;

  // Mobile sidebar toggle
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for all screen sizes */}
      <Sidebar
        menuItems={menuItems}
        heading="Dashboard"
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* Main Content Section */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowSidebar(true)}
          className="lg:hidden fixed top-5 left-5 bg-blue-600 text-white p-2 rounded-lg z-50"
        >
          <FaBars size={24} />
        </button>

        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Owned Models 📚
          </h2>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              title="Total Models"
              value={totalModels}
              icon={<FaDatabase className="text-blue-400" size={28} />}
            />
            <StatCard
              title="Active Models"
              value={activeModels}
              icon={<FaCheckCircle className="text-green-400" size={28} />}
            />
            <StatCard
              title="Pending Models"
              value={pendingModels}
              icon={<FaClock className="text-yellow-400" size={28} />}
            />
          </div>

          {/* Models List */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Models List 📊
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedModels;
