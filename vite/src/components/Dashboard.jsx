// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [name, setName] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [companies, setCompanies] = useState([]);
//   const navigate = useNavigate();

//   // Load data from local storage when component mounts
//   useEffect(() => {
//     const storedName = localStorage.getItem("name");
//     const storedCompanies = JSON.parse(localStorage.getItem("headCompanies")) || [];

//     if (storedName) setName(storedName);
//     setCompanies(storedCompanies);
//   }, []);

//   // Save companies to local storage whenever companies state changes
//   useEffect(() => {
//     localStorage.setItem("headCompanies", JSON.stringify(companies));
//   }, [companies]);

//   const addCompany = (e) => {
//     e.preventDefault();
//     if (companyName.trim() !== "") {
//       const newCompany = {
//         name: companyName,
//         head: name,
//       };
//       setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
//       setCompanyName("");
//     } else {
//       alert("Company name cannot be empty!");
//     }
//   };

//   // const goToDetails = (company) => {
//   //   navigate(`/company-head-details/${encodeURIComponent(company.name)}`);
//   // };

//   return (
//     <div className="dashboard">
//       <h1>Welcome to your Dashboard, {name}!</h1>
//       <p>This is where you can manage your company.</p>

//       <form onSubmit={addCompany}>
//         <input
//           type="text"
//           placeholder="Enter company name"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           required
//         />
//         <button type="submit">Create Company</button>
//       </form>

//       <h3>Your Companies:</h3>
//       {/* <ul>
//         {companies.length === 0 ? (
//           <p>No companies created yet.</p>
//         ) : (
//           companies.map((company, index) => (
//             <li key={index}>
//               <span
//                 onClick={() => goToDetails(company)}
//                 style={{ cursor: "pointer", color: "blue" }}
//               >
//                 {company.name}
//               </span>
//             </li>
//           ))
//         )}
//       </ul> */}
//     </div>
//   );
// };

// export default Dashboard;
