import React, { useState, useMemo } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json";
import { signupUser } from "../services/signupServices";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isModelOwner, setIsModelOwner] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const role = isModelOwner ? "model_owner" : "contributor";
    const formDataWithRole = { ...formData, role };

    const result = await signupUser(formDataWithRole);

    if (result.error) {
      setError(result.error);
    } else {
      console.log("Signup Successful:", result);
      navigate("/login");
    }
  };

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: loginAnimation,
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    }),
    []
  );

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Lottie options={defaultOptions} height="100%" width="100%" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>
      <div className="relative z-10 bg-gray-900/90 border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isModelOwner ? "Signup as Model Owner" : "Signup as Contributor"}
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => setIsModelOwner(true)}
            className={`w-1/2 py-2 rounded-l-lg ${isModelOwner ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Model Owner
          </button>
          <button
            onClick={() => setIsModelOwner(false)}
            className={`w-1/2 py-2 rounded-r-lg ${!isModelOwner ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Contributor
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            {isModelOwner ? "Sign Up as Model Owner" : "Sign Up as Contributor"}
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
