import React, { useState } from "react";
import contactImage from "../assets/contact.png"; // Add your 3D image here

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bbg-gray-900 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-500/50"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        {/* Left - Contact Form */}
        <div className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-xl p-12 w-full max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Get in Touch
          </h2>

          {/* Show Success Message */}
          {success && (
            <p className="text-green-500 mb-6 text-lg text-center">
              ✅ Your message has been sent successfully!
            </p>
          )}

          {/* Show Error Message */}
          {error && (
            <p className="text-red-500 mb-6 text-lg text-center">{error}</p>
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

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-3 px-5 py-4 bg-gray-800 text-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - 3D Image */}
        <div className="hidden lg:flex justify-center items-center bg-yellow-400 rounded-full">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
