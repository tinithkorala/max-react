import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id:1, title: 'Car Insuarance', amount: 254.50, date: new Date(2023, 10, 11) },
  { id:2, title: 'Food', amount: 150.50, date: new Date(2023, 11, 11) },
  { id:3, title: 'Security', amount: 25.50, date: new Date(2022, 10, 11) },
  { id:4, title: 'Test', amount: 25.50, date: new Date(2023, 11, 11) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

export default App;
