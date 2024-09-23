import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CompanyHeadDetails = () => {
  const location = useLocation();
  const { company } = location.state || {};

  // Retrieve stored data from localStorage (if available) or initialize budget and expenses
  const [budget, setBudget] = useState(() => {
    const storedBudget = localStorage.getItem(`budget-${company?.name}`);
    return storedBudget ? parseFloat(storedBudget) : 1000; // Default budget is 1000
  });

  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState("");
  
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem(`expenses-${company?.name}`);
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  // Save budget and expenses to localStorage whenever they change
  useEffect(() => {
    if (company?.name) {
      localStorage.setItem(`budget-${company.name}`, budget.toFixed(2));
      localStorage.setItem(`expenses-${company.name}`, JSON.stringify(expenses));
    }
  }, [budget, expenses, company?.name]);

  // Function to add an expense and request permission
  const handleAddExpense = (e) => {
    e.preventDefault();

    const expenseAmount = parseFloat(expensePrice);

    if(budget <= 0) {
      alert("Your budget is finished");
      return;
    }

    if(expenseAmount > budget) {
      alert(`You have only $${budget.toFixed(2)} left`);
      return;
    }

    if (expenseName.trim() && expensePrice > 0) {
      const newExpense = {
        name: expenseName,
        price: parseFloat(expensePrice),
      };

      // Show permission alert
      const permission = window.confirm("Do you want to request permission to add this expense?");
      
      if (permission) {
        // Store the expense in a temporary location
        const pendingExpenses = JSON.parse(localStorage.getItem('pending-expenses')) || [];
        pendingExpenses.push(newExpense);
        localStorage.setItem('pending-expenses', JSON.stringify(pendingExpenses));
        alert("Expense request sent to Company Owner for approval.");

        // Clear the fields
        setExpenseName("");
        setExpensePrice("");
      }
    }
  };

  return (
    <div className="company-head-details">
      <h1>{company?.name} - Company Details</h1>
      <h2>Remaining Budget: ${budget.toFixed(2)}</h2>

      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Enter expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter expense price"
          value={expensePrice}
          onChange={(e) => setExpensePrice(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses:</h3>
      <ul>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.price.toFixed(2)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CompanyHeadDetails;
