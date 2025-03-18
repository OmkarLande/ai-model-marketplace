import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg" // Background when scrolled
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-3xl font-bold text-blue-500 tracking-wide">
          Excalibur
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/models"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            Models
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
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
        </nav>

        {/* Mobile Menu Button */}
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
        className={`lg:hidden fixed top-16 left-0 w-full bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6">
          <Link
            to="/models"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Models
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
