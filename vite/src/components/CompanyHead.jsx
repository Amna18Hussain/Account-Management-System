import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CompanyHead = () => {
  const [headName, setHeadName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the company head's name and companies from localStorage
    const storedHeadName = localStorage.getItem("headName");
    const storedCompanies = JSON.parse(localStorage.getItem("headCompanies")) || [];

    if (storedHeadName) setHeadName(storedHeadName);
    setCompanies(storedCompanies);
  }, []);

  useEffect(() => {
    localStorage.setItem("headCompanies", JSON.stringify(companies));
  }, [companies]);

  const addCompany = (e) => {
    e.preventDefault();
    if (companyName.trim() !== "") {
      const newCompany = {
        name: companyName,
        head: headName,
      };
      setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
      setCompanyName("");
    }
  };

  const removeCompany = (index) => {
    setCompanies((prevCompanies) => {
      const newCompanies = [...prevCompanies];
      newCompanies.splice(index, 1); // Remove company by index
      return newCompanies;
    });
  };

  const goToDetails = (company) => {
    navigate(`/company-head-details/${encodeURIComponent(company.name)}`, {
      state: { company },
    });
  };

  return (
    <div className="company-head-dashboard">
      <h1>Welcome, {headName} (Company Head)</h1>

      <form onSubmit={addCompany}>
        <input
          type="text"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <button type="submit">Create Company</button>
      </form>

      <h3>Your Companies:</h3>
      <ul>
        {companies.length === 0 ? (
          <p>No companies created yet.</p>
        ) : (
          companies.map((company, index) => (
            <li key={index}>
              <span onClick={() => goToDetails(company)}>
                {company.name}
              </span>
              <button className="remove-btn" onClick={() => removeCompany(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CompanyHead;
