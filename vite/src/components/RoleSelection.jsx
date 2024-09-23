import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("role", role);

    // Store additional information based on the selected role
    const name = JSON.parse(localStorage.getItem("data"))?.name;

    if (role === "Company Head") {
      localStorage.setItem("headName", name);
      navigate("/company-head");
    } else if (role === "Company Owner") {
      localStorage.setItem("ownerName", name);
      navigate("/company-owner"); // Adjust as necessary for navigation
    }
  };

  return (
    <div className="role-selection-container">
      <h2>Select Your Role</h2>
      <div className="role-buttons">
        <button onClick={() => handleRoleSelection("Company Owner")}>
          Company Owner
        </button>
        <button onClick={() => handleRoleSelection("Company Head")}>
          Company Head
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
