import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menuItems, heading = "Dashboard" }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-700 p-6 fixed h-screen hidden lg:block">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">{heading}</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => navigate(item.path)}
              className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
