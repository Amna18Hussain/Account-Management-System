import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import RoleSelection from "./components/RoleSelection";
import SignUpForm from "./components/SignUpForm";
import CompanyHead from "./components/CompanyHead"; 
import CompanyHeadDetails from "./components/CompanyHeadDetails"; 
import CompanyOwner from "./components/CompanyOwner"; 
import CompanyOwnerDetails from "./components/CompanyOwnerDetails"; 
import OwnerPage from "./components/OwnerPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route path="/company-head" element={<CompanyHead />} />
          <Route path="/company-head-details/:companyName" element={<CompanyHeadDetails />} />
          <Route path="/company-owner" element={<CompanyOwner />} />
          <Route path="/company-owner/details/:companyName" element={<CompanyOwnerDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
