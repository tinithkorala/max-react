import './ExpenseItems.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 21st 2022</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$250.50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;