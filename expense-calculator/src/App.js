import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const expenses = [{
    'id': 1,
    'title': 'Car Insurance',
    'amount': 456.59,
    'date': new Date(2023, 3, 14),
  },{
    'id': 2,
    'title': 'Standing Desk',
    'amount': 278.00,
    'date': new Date(2023, 6, 1),
  },{
    'id': 3,
    'title': 'Mobile Phone',
    'amount': 712.83,
    'date': new Date(2023, 7, 23),
  },];

  return (
    <div>
      <NewExpense />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
