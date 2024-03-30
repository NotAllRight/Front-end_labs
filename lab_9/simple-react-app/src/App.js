// App.js
import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch('/expenses.json')
      .then(response => response.json())
      .then(data => {
        // Обновление состояния с данными из файла expenses.json
        const expenses = data.expenses.map(item => ({
          ...item,
          date: new Date(item.date)
        }));
        setExpenses(expenses);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div>
      <h2>My Expenses</h2>
      {!isAdding && <div class="add-new-expense-container"><button onClick={startAddingHandler}>Add New Expense</button></div>}
      {isAdding && <NewExpense onCancel={stopAddingHandler} onAddExpense={addExpenseHandler} />}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
