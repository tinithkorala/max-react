import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const exprenses = [
    { title: 'Car Insuarance', amount: 254.50, date: new Date(2023, 10, 11) },
    { title: 'Food', amount: 150.50, date: new Date(2021, 10, 11) },
    { title: 'Security', amount: 25.50, date: new Date(2022, 10, 11) },
  ] 

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items = {exprenses}
      />
    </div>
  );
}

export default App;
