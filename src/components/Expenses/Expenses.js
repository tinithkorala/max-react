import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilterdYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilterdYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
}

export default Expenses;