import React, { useState, useMemo } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json"; // Using the same animation for Signup

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup Successful:", data);

      // Redirect to login after successful signup
      navigate("/login");
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  // Memoized Lottie Options (Prevents Reinitialization)
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: loginAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Lottie
          options={defaultOptions}
          height={"100%"} // Full height
          width={"100%"} // Full width
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-gray-900/90 border border-gray-700 rounded-2xl shadow-2xl p-12 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Create Your Account
        </h2>

        {/* Show Error Message */}
        {error && (
          <p className="text-red-500 text-lg mb-6 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-3 px-5 py-4 bg-gray-800 text-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-3 px-5 py-4 bg-gray-800 text-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-3 px-5 py-4 bg-gray-800 text-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg shadow-lg transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Additional Links */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-lg">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 hover:underline transition duration-300"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
