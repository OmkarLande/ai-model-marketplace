import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

const AddContribution = ({ modelId }) => {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "text/plain"];
    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type. Allowed types: PDF, PNG, JPEG, TXT.");
      return;
    }

    const token = localStorage.getItem("user_token");
    if (!token) {
      alert("Unauthorized: No token found");
      return;
    }
    console.log("token:", token);
    let userId;
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);
      userId = decoded?.user_id;
      if (!userId) throw new Error("Invalid user ID");
    } catch (error) {
      alert("Invalid token. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("model_file.py", file);
    formData.append("user_id", userId);
    formData.append("model_id", modelId);

    try {
      const response = await fetch(`http://localhost:5000/api/models/upload-contribution`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "File uploaded successfully");
      } else {
        alert(data.error || "File upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("File upload failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload a File</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-white border border-gray-600 p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContribution;
