import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottieanim.json";
import collaborationImage from "../assets/collaboration.png";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
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
                Unlock Your Document&apos;s Potential with{" "}
                <span className="text-blue-500">Excalibur</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mt-4">
                Excalibur is your ultimate platform for organizing and accessing
                a diverse collection of documents. Collaborate in real-time,
                invite others, and leverage AI to summarize content
                effortlessly.
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
                  Collaborate Seamlessly with{" "}
                  <span className="text-blue-500">Excalibur</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  With Excalibur, you can edit documents in real-time, making
                  teamwork effortless. Collaborate with your peers and enhance
                  productivity like never before.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Teamwork Simplified
                    </h3>
                    <p className="text-gray-400">
                      Invite others easily to join your projects and contribute
                      their insights.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      Edit Together
                    </h3>
                    <p className="text-gray-400">
                      Work collaboratively in real-time, ensuring everyone is on
                      the same page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[400px]">
                <img
                  src={collaborationImage}
                  alt="Real-time collaboration features"
                  className="w-[1000px] h-[500px] lg:h-[600px] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

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
                <h3 className="text-xl font-bold text-white">
                  Document Collaboration
                </h3>
                <p className="text-gray-400">
                  Work together in real-time with friends and colleagues on any
                  type of document.
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
                <h3 className="text-xl font-bold text-white">Easy Invites</h3>
                <p className="text-gray-400">
                  Invite others to join and contribute to your documents with
                  just a few clicks.
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
                  AI-Powered Summarizer
                </h3>
                <p className="text-gray-400">
                  Extract key points from long-form content quickly with our
                  intelligent AI tool.
                </p>
              </div>
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
              <div className="p-6 cursor-pointer hover:bg-gray-700 rounded-lg transition duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Summarizer
                </h3>
                <p className="text-gray-400">
                  Extract key points from lengthy documents quickly and
                  efficiently.
                </p>
              </div>

              {/* Collapsible Content */}
              <div
                id="models-list"
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="space-y-4 mt-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 p-4">
                  {/* Model 1 */}
                  <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Real-time Editor
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Collaborate seamlessly with your team and make real-time
                      changes.
                    </p>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                  </div>

                  {/* Model 2 */}
                  <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Document Analyzer
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Analyze documents and extract valuable insights with AI.
                    </p>
                    <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                  </div>

                  {/* Model 3 */}
                  <div className="relative group bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Smart Access Control
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Securely control document access with intelligent
                      permissions.
                    </p>
                    <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
                  </div>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                    <span>Explore More</span>
                  </button>
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
              © 2025 Excalibur. All rights reserved.
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
