import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottieanim.json";
import collaborationImage from "../assets/collaboration.png";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import modelOwnerImage from "../assets/ownerwork.png"; // Replace with actual image path
import contributorImage from "../assets/workflow.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden m-0 p-0">
          {/* Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-300"></div>

          {/* Content on Top */}
          <div className="relative z-10 w-full h-full flex items-center justify-between px-8 lg:px-20">
            {/* Left Content */}
            <div className="max-w-2xl text-left ml-0 lg:ml-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Decentralized AI Model Marketplace with{" "}
                <span className="text-blue-500">NFTs & Federated Learning</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mt-4">
                Unlock a new era of AI model trading and decentralized training.
                AI Nexus enables the secure exchange of AI models as NFTs and
                integrates federated learning to empower decentralized model
                training.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-lg shadow-lg">
                  Get Started
                </button>
                <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 py-2 px-6 rounded-lg text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Lottie Animation */}
            <div className="hidden lg:block w-1/2 h-[1000px]">
              <Lottie options={defaultOptions} height={1000} width={1000} />
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-24 bg-gray-900 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                  Empower Decentralized AI{" "}
                  <span className="text-blue-500">Collaboration</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  AI Nexus facilitates decentralized collaboration through AI
                  model trading and federated learning. Connect with AI model
                  creators and participate in secure training processes across
                  the globe.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Secure AI Model Trading
                    </h3>
                    <p className="text-gray-400">
                      Trade AI models securely as NFTs, ensuring transparent
                      ownership and access rights.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Federated Learning
                    </h3>
                    <p className="text-gray-400">
                      Enable decentralized model training across multiple nodes,
                      enhancing privacy and data security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[400px]">
                <img
                  src={collaborationImage}
                  alt="AI model marketplace"
                  className="w-[1000px] h-[500px] lg:h-[600px] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Models Section */}

        {/* Key Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Key <span className="text-blue-500">Features</span>
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-blue-900">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0-2.21-2.69-4-6-4S0 8.79 0 11c0 2.21 2.69 4 6 4s6-1.79 6-4zM24 11c0-2.21-2.69-4-6-4s-6 1.79-6 4c0 2.21 2.69 4 6 4s6-1.79 6-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">AI Model NFTs</h3>
                <p className="text-gray-400">
                  Securely buy, sell, and trade AI models as NFTs in a
                  decentralized marketplace.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-green-900">
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Federated Learning
                </h3>
                <p className="text-gray-400">
                  Participate in decentralized model training across multiple
                  devices, ensuring privacy and efficiency.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-purple-900">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-10v14M5 12H3m3 3H3m3-6H3m18 0h-2m-6 6h6m0 0h-6m6 0v-6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Secure Transactions
                </h3>
                <p className="text-gray-400">
                  All AI model trades are recorded on the blockchain, ensuring
                  secure and transparent transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-900 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Model Owner & <span className="text-blue-500">Contributor</span>{" "}
              Roles
            </h2>

            {/* Model Owner Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Model Owner Details */}
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Model Owner</h3>
                <p className="text-lg text-gray-400">
                  The Model Owner is responsible for uploading AI models to the
                  marketplace, ensuring their accuracy and quality. They can
                  manage the models, set licensing terms, and allow contributors
                  to collaborate on federated learning.
                </p>
                <div className="text-gray-400">
                  <h4 className="text-xl font-semibold">Workflow</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Upload models to the marketplace as NFTs.</li>
                    <li>
                      Set permissions and licensing terms for contributors.
                    </li>
                    <li>Monitor model performance and updates.</li>
                    <li>
                      Enable federated learning for decentralized training.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Model Owner Workflow Diagram */}
              <div className="relative w-full h-[500px]">
                <img
                  src={modelOwnerImage}
                  alt="Model Owner Workflow"
                  className="w-full h-full object-contain rounded-lg "
                />
              </div>
            </div>

            {/* Contributor Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
              <div className="relative w-full h-[500px]">
                <img
                  src={contributorImage}
                  alt="Contributor Workflow"
                  className="w-full h-full object-contain rounded-lg "
                />
              </div>
              {/* Left Column: Contributor Details */}
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Contributor</h3>
                <p className="text-lg text-gray-400">
                  Contributors are responsible for training models using
                  federated learning. They collaborate with Model Owners and
                  enhance the AI models by training them on their local data,
                  which can later be incorporated into the main model.
                </p>
                <div className="text-gray-400">
                  <h4 className="text-xl font-semibold">Workflow</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Download the model from the marketplace for federated
                      learning.
                    </li>
                    <li>
                      Train the model on local data while maintaining data
                      privacy.
                    </li>
                    <li>
                      Share the training results with the Model Owner for
                      integration.
                    </li>
                    <li>
                      Contribute improvements to the model for further updates.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Contributor Workflow Diagram */}
            </div>
          </div>
        </section>
        {/* CTA Section */}

        <section className="py-24 bg-gray-900 w-full">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
            {/* Section Title */}
            <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Explore Our AI Models
              </h2>
              <p className="text-gray-400 text-lg">
                Unlock advanced capabilities with our powerful AI models
                designed to enhance document management and collaboration.
              </p>
            </div>

            {/* Collapsible Models List */}
            <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Single Model Display Initially */}
              <Link to="/model/13">
                <div className="p-6 cursor-pointer hover:bg-gray-700 rounded-lg transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Image Recognition
                  </h3>
                  <p className="text-gray-400">
                    A model trained to recognize and categorize various document
                    types from images, including scanned documents, screenshots,
                    and handwritten notes..
                  </p>
                </div>
              </Link>

              {/* Collapsible Content */}
              <div
                id="models-list"
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="space-y-4 mt-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 p-4">
                  {/* Model 1 */}
                  <Link to="/model/14">
                    <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Sentiment Analysis AI Model
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A model designed to analyze the sentiment of text data,
                        classifying it into positive, negative, or neutral
                        sentiments.
                      </p>
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                    </div>
                  </Link>
                  {/* Model 2 */}
                  <Link to="/model/15">
                    <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Speech Recognition AI Model
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A deep learning model for converting audio speech into
                        text, supporting multiple languages and dialects.
                      </p>
                      <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                    </div>
                  </Link>
                  <Link to="/model/17">
                    <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Time Series Analysis AI Model
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A model designed for forecasting and analyzing
                        time-series data, such as stock prices, weather data,
                        and sales trends.
                      </p>
                      <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                    </div>
                  </Link>
                  <Link to="/marketplace">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                      <span>Explore More</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Expand/Collapse Button with Pull Effect */}
              <div
                className={`flex justify-center transition-all duration-300 ${
                  isExpanded ? "mt-2 mb-2" : "mt-4"
                }`}
              >
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-full text-md shadow-lg transition-all duration-300 transform ${
                    isExpanded ? "-translate-y-2 scale-105" : "translate-y-0"
                  }`}
                >
                  {isExpanded ? (
                    <ChevronUpIcon className="h-6 w-6" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-black w-full">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 AI Nexus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
