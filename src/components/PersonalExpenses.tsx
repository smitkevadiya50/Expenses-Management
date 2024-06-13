import React, { useState, useEffect } from 'react';
import Select from 'react-select';

interface Group {
  name: string;
  members: string[];
}

interface Expense {
  id: number;
  group: string;
  title: string;
  totalPaid: number;
  paidBy: string;
  contributors: string[];
}

const PersonalExpenses: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([
    { name: 'Group 1', members: ['Alice', 'Bob', 'Charlie'] },
    { name: 'Group 2', members: ['Dave', 'Eve', 'Frank'] },
    { name: 'Group 3', members: ['Grace', 'Heidi', 'Ivan'] },
  ]);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      group: 'Group 1',
      title: 'Dinner',
      totalPaid: 100,
      paidBy: 'Alice',
      contributors: ['Alice', 'Bob', 'Charlie'],
    },
    {
      id: 2,
      group: 'Group 2',
      title: 'Movie Tickets',
      totalPaid: 60,
      paidBy: 'Dave',
      contributors: ['Dave', 'Eve', 'Frank'],
    },
  ]);

  const [newExpense, setNewExpense] = useState<Expense>({
    id: 0,
    group: '',
    title: '',
    totalPaid: 0,
    paidBy: '',
    contributors: [],
  });

  useEffect(() => {
    if (newExpense.group) {
      const selectedGroup = groups.find(group => group.name === newExpense.group);
      if (selectedGroup) {
        setNewExpense({ ...newExpense, contributors: [], paidBy: '' });
      }
    }
  }, [newExpense.group, groups]);

  const handleAddExpense = () => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setNewExpense({ id: 0, group: '', title: '', totalPaid: 0, paidBy: '', contributors: [] });
  };

  const calculateIndividualShare = (expense: Expense) => {
    return (expense.totalPaid / expense.contributors.length).toFixed(2);
  };

  const groupOptions = groups.map(group => ({ value: group.name, label: group.name }));
  const memberOptions = newExpense.group
    ? groups.find(group => group.name === newExpense.group)?.members.map(member => ({ value: member, label: member }))
    : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Expenses</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        <div className="grid gap-4 mb-4">
          <Select
            options={groupOptions}
            placeholder="Select Group"
            onChange={(option) => setNewExpense({ ...newExpense, group: option ? option.value : '' })}
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Title"
            value={newExpense.title}
            onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Total Paid"
            value={newExpense.totalPaid}
            onChange={(e) => setNewExpense({ ...newExpense, totalPaid: +e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <Select
            options={memberOptions}
            placeholder="Paid By"
            onChange={(option) => setNewExpense({ ...newExpense, paidBy: option ? option.value : '' })}
            className="mb-2"
          />
          <Select
            isMulti
            options={memberOptions}
            placeholder="Contributors"
            value={newExpense.contributors.map(contributor => ({ value: contributor, label: contributor }))}
            onChange={(selectedOptions) =>
              setNewExpense({ ...newExpense, contributors: selectedOptions ? selectedOptions.map(option => option.value) : [] })
            }
            className="mb-2"
          />
          <button onClick={handleAddExpense} className="bg-green-500 text-white px-4 py-2 rounded">
            Add Expense
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Expenses List</h2>
      <div className="grid gap-4">
        {expenses.map((expense) => (
          <div key={expense.id} className="p-4 border border-gray-300 rounded-lg shadow-md justify-between md:flex">
            <h3 className="text-lg font-semibold">{expense.title}</h3>
            <p className='md:flex-col md:flex'><strong>Group:</strong> {expense.group}</p>
            <p className='md:flex-col md:flex'><strong>Total Paid:</strong> ${expense.totalPaid}</p>
            <p className='md:flex-col md:flex'><strong>Paid By:</strong> {expense.paidBy}</p>
            <p className='md:flex-col md:flex'><strong>Contributors:</strong> {expense.contributors.join(', ')}</p>
            <p className='md:flex-col md:flex'><strong>Individual Share:</strong> ${calculateIndividualShare(expense)} each</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalExpenses;
