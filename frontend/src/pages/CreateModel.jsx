import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar";
import { createModel } from "../services/createModelService";

const menuItems = [
  { label: "Create Model", path: "/create-model" },
  { label: "Active Contributors", path: "/active-contributors" },
  { label: "Owned Models", path: "/owned-models" },
];

const CreateModel = () => {
  const [formData, setFormData] = useState({
    model_name: "",
    description: "",
    version: "",
    training_data_info: "",
    performance_metrics: "",
    license_type: "",
    price: "",
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formDataToSend = new FormData();

    // Append all form data fields manually
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append file if available
    if (file) {
      formDataToSend.append("model_file.py", file);
    }

    console.log("Sending FormData:", formDataToSend);

    const result = await createModel(formDataToSend);
    if (result.error) {
      setError(result.error);
    } else {
      console.log("Model Created Successfully:", result);
      navigate("/model-owner-dashboard");
    }
  };

  // Handle sidebar toggle for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Define the profile link for navigation
  const profileLink = "/model-owner-dashboard"; // Update with the actual profile route

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar for Large Screens */}
      <div className="hidden lg:block">
        <Sidebar
          menuItems={menuItems}
          heading="Dashboard"
          profileLink={profileLink} // Pass the profile link
        />
      </div>

      {/* Sidebar for Mobile (Slide-In Drawer) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70">
          <div className="w-64 bg-gray-900 p-6 h-full shadow-lg">
            <Sidebar
              menuItems={menuItems}
              heading="Dashboard"
              profileLink={profileLink} // Pass the profile link
            />
            <button
              onClick={toggleSidebar}
              className="text-white mt-4 text-sm underline"
            >
              Close Sidebar
            </button>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="flex-1 lg:ml-64 p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          Menu
        </button>

        <div className="w-full max-w-4xl mx-auto mt-12">
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-10 backdrop-blur-md relative">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Create New Model
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-300"
                  >
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

              {/* File Upload Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Upload Model File
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg"
              >
                Create Model
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModel;
