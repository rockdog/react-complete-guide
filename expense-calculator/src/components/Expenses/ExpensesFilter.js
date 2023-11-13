import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = props => {
    const years = new Set([...props.expenses.map(expense => expense.date.getFullYear()), props.selectedYear]);
    const yearsToFilter = Array.from(years).sort();

    const filterChangedHandler = event => {
        props.onFilterChanged(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={filterChangedHandler}>
                    {yearsToFilter.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
