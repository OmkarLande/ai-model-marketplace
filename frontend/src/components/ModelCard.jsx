import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-white mb-4">{model.name}</h3>
      <p className="text-gray-400 mb-4">{model.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-blue-500 font-semibold">{model.price}</span>
        <span className="text-sm text-gray-400">{model.category}</span>
      </div>

      {/* Button to view model details */}
      <button
        onClick={() => alert(`View details for ${model.name}`)}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
      >
        View Model
      </button>
    </div>
  );
};

export default ModelCard;
