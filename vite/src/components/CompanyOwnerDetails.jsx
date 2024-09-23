import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";

const CompanyOwnerDetails = () => {
  const { companyName } = useParams();
  const location = useLocation();
  const { owner, company } = location.state || {};
  const currentUser = localStorage.getItem("name"); // Get logged-in owner name

  // Check if the current user is authorized
  if (!company || owner !== currentUser) {
    return <Navigate to="/company-head-details/:companyName" />;
  }

  return (
    <div className="company-owner-details">
      <h1>Company Expencess</h1>
      <h2>{companyName}</h2>
      <p>Company Head: {owner}</p>
      <p>More details about {companyName} can be added here.</p>
    </div>
  );
};

export default CompanyOwnerDetails;
