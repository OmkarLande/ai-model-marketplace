// src/pages/ContributorProfile.jsx
import React, { useState, useMemo } from "react";
import Lottie from "react-lottie";
import Avatar from "boring-avatars";
import Sidebar from "../components/SideBar";
import profileAnimation from "../assets/profile.json";
import { FaBars } from "react-icons/fa";

// Sidebar menu items for contributors
const menuItems = [
  { label: "Contribute to Model", path: "/contribute-model" },
  { label: "Previous Contributions", path: "/previous-contributions" },
  { label: "Active Contributions", path: "/active-contributions" },
];

const ContributorProfile = () => {
  // State to control sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  // Dummy user data (replace with API data later)
  const user = {
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "contributor",
  };

  // Memoized Lottie Options (Prevents Reinitialization)
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: profileAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for Desktop and Mobile */}
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
      <div className="flex-1 lg:ml-64 p-6 md:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen relative">
        {/* Lottie Animation in the Background */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Card */}
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-12">
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-10 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <Avatar
                size={100}
                name={user.name}
                variant="beam"
                colors={["#92A1C6", "#F0AB3D", "#C271B4", "#4E79A7", "#E15759"]}
              />
              {/* User Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-bold">{user.name}</h3>
                <p className="text-gray-400">{user.email}</p>
                <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg mt-2 inline-block">
                  {user.role.replace("_", " ").toUpperCase()}
                </span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-300">
                Welcome back,{" "}
                <span className="text-purple-400 font-semibold">
                  {user.name}
                </span>
                ! 🎉
              </p>
              <p className="text-lg text-gray-300">
                You can contribute to models, review changes, and enhance
                accuracy.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                View Tasks
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Submit Work
              </button>
            </div>
          </div>

          {/* Optional Additional Cards or Widgets */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-900/90 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                Completed Tasks
              </h3>
              <p className="text-3xl font-bold text-purple-400">28</p>
            </div>
            <div className="bg-gray-900/90 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                Pending Reviews
              </h3>
              <p className="text-3xl font-bold text-purple-400">7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorProfile;
