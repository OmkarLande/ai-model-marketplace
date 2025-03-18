// src/components/StatCard.jsx
import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-900/90 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex items-center space-x-4">
      <div className="bg-gray-800 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-3xl font-bold text-blue-400">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
