import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "boring-avatars";

const ModelOwnerProfile = () => {
  const navigate = useNavigate();

  // Dummy user data (replace with API data later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "model_owner",
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-700 p-6 fixed h-screen">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            {/* Navigate to CreateModel */}
            <button
              onClick={() => navigate("/create-model")}
              className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              Create Model
            </button>
          </li>
          <li>
            <button className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300">
              Butt2
            </button>
          </li>
          <li>
            <button className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300">
              Butt3
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 ml-64 p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen">
        <div className="w-full max-w-4xl mx-auto mt-12">
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-10 backdrop-blur-md relative">
            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <Avatar
                size={100}
                name={user.name}
                variant="beam"
                colors={["#92A1C6", "#F0AB3D", "#C271B4", "#4E79A7", "#E15759"]}
              />
              {/* User Info */}
              <div>
                <h3 className="text-3xl font-bold">{user.name}</h3>
                <p className="text-gray-400">{user.email}</p>
                <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg">
                  {user.role.replace("_", " ").toUpperCase()}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-300">
                Welcome back,{" "}
                <span className="text-blue-400 font-semibold">{user.name}</span>
                ! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelOwnerProfile;
