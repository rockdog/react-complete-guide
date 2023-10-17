import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseList.css';

const ExpenseList = props => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangedHandler = selectedYear => {
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    };
    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={selectedYear} onFilterChanged={filterChangedHandler} />
            {props.expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
        </Card>
    );
}

export default ExpenseList;
