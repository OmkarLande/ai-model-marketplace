import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import { FaBars } from "react-icons/fa";
import { fetchModels } from "../services/contributeToModelService";

const menuItems = [
  { label: "Contribute to Model", path: "/contribute-model" },
  { label: "Previous Contributions", path: "/previous-contributions" },
  { label: "Active Contributions", path: "/active-contributions" },
];

const ContributeToModel = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getModels = async () => {
      try {
        const data = await fetchModels()
        console.log(data)
        setModels(data);
      } catch (err) {
        setError("Failed to load models. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getModels();
  }, []);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar
        menuItems={menuItems}
        heading="Contributor Dashboard"
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <button
        onClick={() => setShowSidebar(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-md"
      >
        <FaBars size={24} />
      </button>

      <div className="flex-1 lg:ml-64 p-6 md:p-10 bg-gradient-to-br from-gray-950 to-black min-h-screen">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Contribute to Models 🚀
          </h2>

          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Available Models 📚
            </h3>

            {loading ? (
              <p className="text-gray-400">Loading models...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {model.model_name}
                    </h3>
                    <p className="text-gray-400 mb-4">{model.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-500 font-semibold">
                        {model.price}
                      </span>
                      <span className="text-sm text-gray-400">
                        {model.category}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        alert(`You chose to contribute to ${model.name}`)
                      }
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                    >
                      Contribute
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeToModel;