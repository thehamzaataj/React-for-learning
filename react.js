import React, { useState, useEffect } from 'react';

function BudgetAllocationComponent() {
  const [budget, setBudget] = useState(10000);
  const [spending, setSpending] = useState(5000);
  const [changeAllocation, setChangeAllocation] = useState(0);
  const [currency, setCurrency] = useState('$');

  const handleBudgetChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue)) {
      setBudget(inputValue);
    }
  };

  const handleIncrease = () => {
    if (budget + 10 <= 20000) {
      setBudget(budget + 10);
    }
  };

  const handleDecrease = () => {
    if (budget - 10 >= spending) {
      setBudget(budget - 10);
    }
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  useEffect(() => {
    // Update currency representation on the screen
    // Update Budget, Remaining, Spent so far, Allocated Budget, Change Allocation
  }, [currency]);

  const changeAllocationWithCurrency = `${currency} ${changeAllocation}`;
  const budgetValueWithCurrency = `${currency} ${budget}`;

  return (
    <div>
      <label>Budget:</label>
      <input type="text" value={budgetValueWithCurrency} onChange={handleBudgetChange} />

      <button onClick={handleIncrease}>Increase by 10</button>
      <button onClick={handleDecrease}>Decrease by 10</button>

      <label>Change Allocation:</label>
      <input type="text" value={changeAllocationWithCurrency} onChange={(e) => setChangeAllocation(e.target.value)} />

      <label>Currency:</label>
      <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
        <option value="$">Dollar</option>
        <option value="£">Pound</option>
        <option value="€">Euro</option>
        <option value="₹">Ruppee</option>
      </select>
    </div>
  );
}

export default BudgetAllocationComponent;
