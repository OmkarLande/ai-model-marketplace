import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({
  menuItems,
  heading,
  showSidebar,
  setShowSidebar,
  profileLink,
}) => {
  return (
    <div >
      {/* Sidebar for Large Screens */}
      <div className="py-0 hidden lg:block w-64 bg-gray-900 border-r border-gray-700 fixed h-screen px-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">
          {/* Dashboard heading as a clickable link */}
          <Link to={profileLink} className="hover:text-blue-500">
            {heading}
          </Link>
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for Mobile/Tablet */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="w-64 bg-gray-900 h-full border-r border-gray-700 p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-blue-400">
              {/* Dashboard heading as a clickable link */}
              <Link to={profileLink} className="hover:text-blue-500">
                {heading}
              </Link>
            </h2>
            <button onClick={() => setShowSidebar(false)}>
              <FaTimes className="text-white text-xl" />
            </button>
          </div>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="w-full py-3 px-4 text-lg text-left bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 block"
                  onClick={() => setShowSidebar(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
