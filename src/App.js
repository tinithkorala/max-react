import ExpenseItem from "./components/ExpenseItem";

function App() {
  const exprenses = [
    { title: 'Car Insuarance', amount: 254.50, date: new Date(2023, 10, 11) },
    { title: 'Food', amount: 150.50, date: new Date(2021, 10, 11) },
    { title: 'Security', amount: 25.50, date: new Date(2022, 10, 11) },
  ] 
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={exprenses[0].title} 
        amount={exprenses[0].amount} 
        date={exprenses[0].date} 
      />
      <ExpenseItem 
        title={exprenses[1].title} 
        amount={exprenses[1].amount} 
        date={exprenses[1].date} 
      />
      <ExpenseItem 
        title={exprenses[2].title} 
        amount={exprenses[2].amount} 
        date={exprenses[2].date} 
      />
    </div>
  );
}

export default App;
