import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import { FaBars } from "react-icons/fa";

// Sidebar menu items for contributors
const menuItems = [
  { label: "Contribute to Model", path: "/contribute-model" },
  { label: "Previous Contributions", path: "/previous-contributions" },
  { label: "Active Contributions", path: "/active-contributions" },
];

const profileLink = "/contributor-dashboard";

const PreviousContributions = () => {
  // State to control sidebar visibility for mobile
  const [showSidebar, setShowSidebar] = useState(false);

  // Dummy data for previous contributions (replace with API data later)
  const [contributions] = useState([
    {
      id: 1,
      name: "Sentiment Analysis Model",
      status: "Completed",
      contributionDate: "2025-01-10",
      description:
        "A model that analyzes sentiment from text using natural language processing.",
    },
    {
      id: 2,
      name: "Image Classification Model",
      status: "Pending Review",
      contributionDate: "2025-02-05",
      description:
        "Classifies images into multiple categories with high accuracy.",
    },
    {
      id: 3,
      name: "Fraud Detection Model",
      status: "Completed",
      contributionDate: "2024-12-20",
      description: "Detects fraudulent transactions in real-time using AI.",
    },
    {
      id: 4,
      name: "Stock Price Prediction Model",
      status: "Pending Review",
      contributionDate: "2025-02-15",
      description:
        "Predicts stock prices using historical data and machine learning.",
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
            Previous Contributions 📚
          </h2>

          {/* Contributions List */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Your Previous Contributions 💼
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributions.map((contribution) => (
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
                    <span
                      className={`text-sm font-semibold ${
                        contribution.status === "Completed"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
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
                        `Viewing details of contribution to ${contribution.name}`
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

export default PreviousContributions;
