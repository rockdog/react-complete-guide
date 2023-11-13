import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = props => {
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());

    const filterChangedHandler = selectedYear => {
        setSelectedYear(parseInt(selectedYear, 10));
    };

    const sortedExpenses = props.expenses.filter(expense => expense.date.getFullYear() === selectedYear).sort((a, b) => a.date - b.date)

    return (
        <Card className='expenses'>
            <ExpensesFilter expenses={props.expenses} selectedYear={selectedYear} onFilterChanged={filterChangedHandler} />
            <ExpensesChart expenses={sortedExpenses} />
            <ExpensesList expenses={sortedExpenses} />
        </Card>
    );
}

export default Expenses;
