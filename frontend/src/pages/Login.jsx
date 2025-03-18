import React, { useState, useMemo } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json"; // Add your Lottie animation here

const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to manage role toggle
  const [isModelOwner, setIsModelOwner] = useState(true);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Determine role based on toggle
    const role = isModelOwner ? "model_owner" : "contributor";

    const submissionData = {
      ...formData,
      role, // Add role to login data
    };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or role mismatch. Try again.");
      }

      const data = await response.json();
      console.log("Login Successful:", data);

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Redirect based on role
      if (role === "model_owner") {
        navigate("/model-owner-dashboard");
      } else {
        navigate("/contributor-dashboard");
      }
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-gray-900/90 border border-gray-700 rounded-2xl shadow-2xl p-8 sm:p-12 w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
          {isModelOwner ? "Login as Model Owner" : "Login as Contributor"}
        </h2>

        {/* Show Error Message */}
        {error && (
          <p className="text-red-500 text-lg mb-6 text-center">{error}</p>
        )}

        {/* Role Toggle Button */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setIsModelOwner(true)}
            className={`w-1/2 py-2 rounded-l-lg ${
              isModelOwner
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            } transition-all duration-300`}
          >
            Model Owner
          </button>
          <button
            onClick={() => setIsModelOwner(false)}
            className={`w-1/2 py-2 rounded-r-lg ${
              !isModelOwner
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            } transition-all duration-300`}
          >
            Contributor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg shadow-lg transition-all duration-300"
          >
            {isModelOwner ? "Login as Model Owner" : "Login as Contributor"}
          </button>

          {/* Additional Links */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-lg">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:underline transition duration-300"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
