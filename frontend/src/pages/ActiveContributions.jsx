import React, { useState, useEffect } from "react";
import { FaTasks, FaClipboardList, FaChartPie } from "react-icons/fa";
import Sidebar from "../components/SideBar";
import { FaBars } from "react-icons/fa";

// Sidebar menu items for contributors
const menuItems = [
  { label: "Contribute to Model", path: "/contribute-model" },
  { label: "Previous Contributions", path: "/prev-contributions" },
  { label: "Active Contributions", path: "/ative-contributions" },
];
const profileLink = "/contributor-dashboard";


const ActiveContributions = () => {
  // State to control sidebar visibility for mobile
  const [showSidebar, setShowSidebar] = useState(false);

  // Dummy data for active contributions (replace with API data later)
  const [activeContributions] = useState([
    {
      id: 1,
      name: "Sentiment Analysis Model",
      status: "In Progress",
      contributionDate: "2025-03-01",
      description:
        "Currently training a model to analyze sentiment from text using natural language processing.",
    },
    {
      id: 2,
      name: "Image Classification Model",
      status: "In Progress",
      contributionDate: "2025-03-10",
      description:
        "Working on refining the accuracy of image classification in multiple categories.",
    },
    {
      id: 3,
      name: "Fraud Detection Model",
      status: "In Progress",
      contributionDate: "2025-03-12",
      description:
        "Training the model to detect fraudulent transactions using AI and big data.",
    },
    {
      id: 4,
      name: "Stock Price Prediction Model",
      status: "In Progress",
      contributionDate: "2025-03-15",
      description:
        "Predicting future stock prices using time series analysis and machine learning.",
    },
  ]);

  // Calculate the total number of active contributions
  const totalActiveContributions = activeContributions.length;

  // Handle sidebar toggle for mobile
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for Large Screens */}
      <Sidebar
        menuItems={menuItems}
        heading="Contributor Dashboard"
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        profileLink={profileLink}
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
            Active Contributions 🚀
          </h2>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Total Active Contributions
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-500 font-semibold text-4xl">
                  {totalActiveContributions}
                </span>
                <FaTasks className="text-blue-500" size={28} />
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Contributions In Progress
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-500 font-semibold text-4xl">
                  {totalActiveContributions}
                </span>
                <FaClipboardList className="text-yellow-500" size={28} />
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Models Worked On
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-500 font-semibold text-4xl">
                  {activeContributions.length}
                </span>
                <FaChartPie className="text-green-500" size={28} />
              </div>
            </div>
          </div>

          {/* Active Contributions List */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Your Active Contributions ✨
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeContributions.map((contribution) => (
                <div
                  key={contribution.id}
                  className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {contribution.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {contribution.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 font-semibold">
                      {contribution.status}
                    </span>
                    <span className="text-sm text-gray-400">
                      {contribution.contributionDate}
                    </span>
                  </div>

                  {/* Button to view details */}
                  <button
                    onClick={() =>
                      alert(
                        `Viewing details of active contribution to ${contribution.name}`
                      )
                    }
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  >
                    View Details
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

export default ActiveContributions;
