import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enterdTitle, setEnterdTitle] = useState('');
  const [enterdAmount, setEnterdAmount] = useState('');
  const [enterdDate, setEnterdDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  }

  const amountChangeHandler = event => {
    setEnterdAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnterdDate(event.target.value);
  }

  // const inputChangeHandler = (indentifier, value) => {
  //   if (indentifier === 'title') {
  //     setEnterdTitle(value);
  //   } else if (indentifier === 'date') {
  //     setEnterdAmount(value);
  //   } else {
  //     setEnterdAmount(value);
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate)
    };
    console.log(expenseData);
    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');
  }

  return (
    <form onSubmit={submitHandler} noValidate>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" setp="0.01" value={enterdAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" setp="2023-12-31" value={enterdDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
