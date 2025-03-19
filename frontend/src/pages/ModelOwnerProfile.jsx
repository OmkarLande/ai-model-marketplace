import React, { useState, useEffect, useMemo } from "react";
import Avatar from "boring-avatars";
import Lottie from "react-lottie";
import profileAnimation from "../assets/profile.json"; // Import Lottie animation
import Sidebar from "../components/SideBar";
import getUserDetails from "../services/userDetails";

// Sidebar menu items for model owner
const menuItems = [
  { label: "Create Model", path: "/create-model" },
  { label: "Active Contributors", path: "/active-contributors" },
  { label: "Owned Models", path: "/owned-models" },
];

const ModelOwnerProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        if (userDetails && userDetails.user) {
          setUser(userDetails.user); // Store user data correctly
        } else {
          setError("User details not found.");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserDetails();
  }, []);

  // Memoized Lottie Options to prevent unnecessary re-renders
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

  // Loading state or error handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;  // Show a loading state until user data is fetched
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Reusable Sidebar */}
      <Sidebar menuItems={menuItems} heading="Dashboard" />

      {/* Main Content Section */}
      <div className="flex-1 lg:ml-64 p-6 md:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen relative">
        {/* Lottie Animation - Background with Opacity */}
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
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-10 backdrop-blur-md relative">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0">
              <Avatar
                size={100}
                name={user.username}
                variant="beam"
                colors={["#92A1C6", "#F0AB3D", "#C271B4", "#4E79A7", "#E15759"]}
              />
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-3xl font-bold">{user.username}</h3>
                <p className="text-gray-400">{user.email}</p>
                <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg">
                  {user.role.replace("_", " ").toUpperCase()}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-center md:text-left">
              <p className="text-lg text-gray-300">
                Welcome back,{" "}
                <span className="text-blue-400 font-semibold">{user.username}</span>
                ! 🚀
              </p>
              <p className="text-lg text-gray-400">
                Ready to manage your models and track contributions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Button */}
      <div className="fixed bottom-5 left-5 lg:hidden">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
};

export default ModelOwnerProfile;
