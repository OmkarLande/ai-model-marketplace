// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/Marketplace";
import ModelDetails from "./pages/ModelDetails";
import ModelOwnerProfile from "./pages/ModelOwnerProfile";
import ContributorProfile from "./pages/ContributorProfile";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/model/:id" element={<ModelDetails />} />
          <Route path="/ownerprofile" element={<ModelOwnerProfile />} />
          <Route path="/contributorprofile" element={<ContributorProfile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
