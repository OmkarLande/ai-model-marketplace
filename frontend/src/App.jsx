// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

// Auth
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Marketplace
import Marketplace from "./pages/Marketplace";
import ModelDetails from "./pages/ModelDetails";

// Contributor
import ContributorProfile from "./pages/ContributorProfile";
import ContributeToModel from "./pages/ContributeToModel";
import PreviousContributions from "./pages/PreviousContributions";
import ActiveContributions from "./pages/ActiveContributions";

// Owner
import ModelOwnerProfile from "./pages/ModelOwnerProfile";
import CreateModel from "./pages/CreateModel";
import ActiveContributors from "./pages/ActiveContributors";
import OwnedModels from "./pages/OwnedModels";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Page Routes */}
        <Routes className="container mx-auto mt-20">
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/model/:id" element={<ModelDetails />} />
          <Route path="/model-owner-dashboard" element={<ModelOwnerProfile />} />
          <Route path="/create-model" element={<CreateModel />} />
          <Route path="/active-contributors" element={<ActiveContributors />} />
          <Route path="/owned-models" element={<OwnedModels />} />
          <Route path="/contributorprofile" element={<ContributorProfile />} />
          <Route path="/contribute-model" element={<ContributeToModel />} />
          <Route path='/previous-contributions' element={<PreviousContributions />} />
          <Route path='/active-contributions' element={<ActiveContributions />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
