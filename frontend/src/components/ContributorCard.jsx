// src/components/ContributorCard.jsx
import React from "react";
import Avatar from "boring-avatars";

const ContributorCard = ({ contributor }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800/80 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-4">
        <Avatar
          size={50}
          name={contributor.name}
          variant="beam"
          colors={["#92A1C6", "#F0AB3D", "#C271B4", "#4E79A7", "#E15759"]}
        />
        <div>
          <h4 className="text-lg font-bold">{contributor.name}</h4>
          <p className="text-gray-400 text-sm">{contributor.email}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-blue-400">
          {contributor.contributions} Contributions
        </p>
        <p className="text-sm text-yellow-400">{contributor.reviews} Reviews</p>
      </div>
    </div>
  );
};

export default ContributorCard;
