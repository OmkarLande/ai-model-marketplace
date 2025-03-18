import React, { useState, useEffect } from "react";
import { FaTasks, FaChartPie, FaClipboardList } from "react-icons/fa";
import Sidebar from "../components/SideBar";
import StatCard from "../components/StatCard";
import ContributorCard from "../components/ContributorCard";

// Sidebar menu items for model owner
const menuItems = [
  { label: "Create Model", path: "/create-model" },
  { label: "Active Contributors", path: "/active-contributors" },
  { label: "Owned Models", path: "/owned-models" },
];
const ActiveContributors = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [contributors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      contributions: 45,
      reviews: 5,
    },
    {
      id: 2,
      name: "Michael Smith",
      email: "michael@example.com",
      contributions: 30,
      reviews: 12,
    },
    {
      id: 3,
      name: "Sophia Lee",
      email: "sophia@example.com",
      contributions: 55,
      reviews: 8,
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      contributions: 20,
      reviews: 4,
    },
  ]);

  const totalContributions = contributors.reduce(
    (acc, curr) => acc + curr.contributions,
    0
  );
  const totalReviews = contributors.reduce(
    (acc, curr) => acc + curr.reviews,
    0
  );

  // Handle sidebar toggle for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for Large Screens */}
      <div className="hidden lg:block">
        <Sidebar menuItems={menuItems} heading="Dashboard" />
      </div>

      {/* Sidebar for Mobile (Slide-In Drawer) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70">
          <div className="w-64 bg-gray-900 p-6 h-full shadow-lg">
            <Sidebar menuItems={menuItems} heading="Dashboard" />
            <button
              onClick={toggleSidebar}
              className="text-white mt-4 text-sm underline"
            >
              Close Sidebar
            </button>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen relative">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          Menu
        </button>

        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Active Contributors 📊
          </h2>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              title="Total Contributions"
              value={totalContributions}
              icon={<FaTasks className="text-blue-400" size={28} />}
            />
            <StatCard
              title="Pending Reviews"
              value={totalReviews}
              icon={<FaClipboardList className="text-yellow-400" size={28} />}
            />
            <StatCard
              title="Models Worked On"
              value={contributors.length}
              icon={<FaChartPie className="text-green-400" size={28} />}
            />
          </div>

          {/* Contributor List */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contributors List 🧑‍💻
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributors.map((contributor) => (
                <ContributorCard
                  key={contributor.id}
                  contributor={contributor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button to Open Sidebar on Mobile */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-5 left-5 lg:hidden bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
        >
          Open Menu
        </button>
      )}
    </div>
  );
};

export default ActiveContributors;
