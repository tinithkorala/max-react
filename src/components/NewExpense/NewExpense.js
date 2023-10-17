import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHanadler = (enteredeExpenseData) => {
    const expenseData = {
      ...enteredeExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHanadler} />
    </div>
  );
};

export default NewExpense;
