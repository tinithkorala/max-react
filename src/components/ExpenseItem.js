import './ExpenseItems.css';

function ExpenseItem(props) {
  const expenseDate = new Date(2023, 10, 11);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 250.25;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;