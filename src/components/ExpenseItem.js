import './ExpenseItems.css';

function ExpenseItem() {
  const expenseDate = new Date(2023, 10, 11);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 250.25;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;