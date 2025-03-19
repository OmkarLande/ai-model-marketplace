import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path based on where your logo is located

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo Section with Image */}
        <Link to="/" className="flex items-center">
          <img
            src={logo} // The path to your logo image
            alt="AI Nexus Logo"
            className="h-24 w-auto" // Adjust the size of your logo as needed
          />
        </Link>

        <div className="hidden lg:flex items-center lg:gap-8 lg:text-lg lg:font-bold">
          <Link
            to={
              localStorage.getItem("user_token") &&
              JSON.parse(atob(localStorage.getItem("user_token").split(".")[1])).role ===
                "model_owner"
                ? "/model-owner-dashboard"
                : "/contributor-dashboard"
            }
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/marketplace"
            className="text-gray-300  hover:text-blue-500 transition duration-300"
          >
            Market Place
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
          {localStorage.getItem("user_token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("user_token");
                document.cookie =
                  "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload();
              }}
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        <button
          className="lg:hidden block text-gray-300 focus:outline-none focus:text-blue-500"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            // Close Icon
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Opens on Toggle */}
      <div
        className={`lg:hidden fixed left-0 pt-0 w-full transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 ">
          <Link
            to="/marketplace"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Market Place
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
