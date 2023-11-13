import React, { useState } from 'react';
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = expenseData => {
        setExpenses(prevExpenses => {
            return [expenseData, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;
