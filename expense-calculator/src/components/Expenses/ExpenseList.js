import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseList.css';

const ExpenseList = props => {
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());

    const filterChangedHandler = selectedYear => {
        setSelectedYear(parseInt(selectedYear, 10));
    };

    const sortedExpenses = props.expenses.filter(expense => expense.date.getFullYear() === selectedYear).sort((a, b) => a.date - b.date)

    return (
        <Card className='expenses'>
            <ExpensesFilter expenses={props.expenses} selectedYear={selectedYear} onFilterChanged={filterChangedHandler} />
            {sortedExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
        </Card>
    );
}

export default ExpenseList;
