import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const exprenses = [
    { title: 'Car Insuarance', amount: 254.50, date: new Date(2023, 10, 11) },
    { title: 'Food', amount: 150.50, date: new Date(2021, 10, 11) },
    { title: 'Security', amount: 25.50, date: new Date(2022, 10, 11) },
  ] 
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        items = {exprenses}
      />
    </div>
  );
}

export default App;
