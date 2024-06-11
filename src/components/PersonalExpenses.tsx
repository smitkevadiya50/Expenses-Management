import React, { useState } from 'react';

const PersonalExpenses: React.FC = () => {
  const [expense, setExpense] = useState('');
  const [income, setIncome] = useState('');

  const handleAddExpense = () => {
    // Logic to add personal expense
    console.log('Expense added:', expense);
  };

  const handleAddIncome = () => {
    // Logic to add income
    console.log('Income added:', income);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Expenses</h1>
      <div className="mb-4">
        <input
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Expense"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleAddExpense} className="bg-blue-500 text-white px-4 py-2">
          Add Expense
        </button>
      </div>
      <div>
        <input
          type="text"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Income"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleAddIncome} className="bg-green-500 text-white px-4 py-2">
          Add Income
        </button>
      </div>
    </div>
  );
};

export default PersonalExpenses;
