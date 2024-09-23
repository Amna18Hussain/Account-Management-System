import React, { useState, useEffect } from "react";

const CompanyOwner = () => {
  const [ownerName, setOwnerName] = useState("");
  const [pendingExpenses, setPendingExpenses] = useState([]);

  // Load owner name and pending expenses from localStorage when the component mounts
  useEffect(() => {
    const storedOwnerName = localStorage.getItem("name");
    if (storedOwnerName) {
      setOwnerName(storedOwnerName);
    } else {
      alert("No owner found! Please sign in.");
    }

    // Load pending expenses from localStorage
    const pending = JSON.parse(localStorage.getItem('pending-expenses')) || [];
    setPendingExpenses(pending);
  }, []);

  // Approve pending expenses and add them to the company's expense list
  const approveExpenses = () => {
    const companyExpenses = JSON.parse(localStorage.getItem(`expenses-${ownerName}`)) || [];
    const companyBudget = parseFloat(localStorage.getItem(`budget-${ownerName}`)) || 1000;

    let totalNewExpenses = 0;
    pendingExpenses.forEach(expense => {
      totalNewExpenses += expense.price;
    });

    if (totalNewExpenses > companyBudget) {
      alert("Insufficient budget to approve all expenses.");
      return;
    }

    // Add pending expenses to the company's actual expense list
    const updatedExpenses = [...companyExpenses, ...pendingExpenses];
    const updatedBudget = companyBudget - totalNewExpenses;

    // Update the localStorage with the approved expenses and new budget
    localStorage.setItem(`expenses-${ownerName}`, JSON.stringify(updatedExpenses));
    localStorage.setItem(`budget-${ownerName}`, updatedBudget.toFixed(2));

    alert("Expenses approved but still pending for manual removal.");
  };

  // Function to manually remove pending expenses from localStorage
  const removePendingExpenses = () => {
    localStorage.removeItem('pending-expenses');
    setPendingExpenses([]); // Clear the state
    alert("Pending expenses removed.");
  };

  return (
    <div className="company-owner-dashboard">
      <h1>{ownerName} (Company Owner)</h1>

      {pendingExpenses.length > 0 && (
        <div>
          <h3>Pending Expenses:</h3>
          <ul>
            {pendingExpenses.map((expense, index) => (
              <li key={index}>
                {expense.name}: ${expense.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <button onClick={approveExpenses}>Approve Expenses</button>
          <button onClick={removePendingExpenses} style={{ marginLeft: '10px' }}>
            Remove Approved Expenses
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyOwner;
