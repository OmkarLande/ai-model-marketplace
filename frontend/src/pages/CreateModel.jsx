import React, { useState, useMemo } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { createModel } from "../services/modelServices";

const CreateModel = () => {
  const [formData, setFormData] = useState({
    model_name: "",
    description: "",
    version: "",
    training_data_info: "",
    performance_metrics: "",
    license_type: "",
    model_file_path: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const result = await createModel(formData);

    if (result.error) {
      setError(result.error);
    } else {
      console.log("Model Created Successfully:", result);
      navigate("/dashboard");
    }
  };

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: modelAnimation,
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
        <h2 className="text-2xl font-bold text-white text-center mb-6">Create New Model</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-300">
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                id={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter ${key.replace("_", " ")}`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Create Model
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              View all models? <a href="/models" className="text-blue-500 hover:underline">Go to Dashboard</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModel;