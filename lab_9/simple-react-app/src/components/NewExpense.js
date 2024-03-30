// components/NewExpense.js
import React, { useState } from 'react';

function NewExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    props.onCancel();
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div class="new-expense__title">
          <label class="title">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div class="new-expense__amount">
          <label class="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div class="new-expense__date">
          <label class="date">Date</label>
          <input type="date" min="2000-01-01" max="2100-12-31" onChange={dateChangeHandler} />
        </div>
        <div class="new-expense_buttons">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
