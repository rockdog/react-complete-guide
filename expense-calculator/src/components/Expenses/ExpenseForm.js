import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = event => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = event => {
        setDate(event.target.value);
    };
    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            'title': title,
            'amount': +amount,
            'date': new Date(date),
        };
        setTitle('');
        setAmount('');
        setDate('');
        props.onSaveExpenseData(expenseData);
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                    <input name='title' id='title' type='text' onChange={titleChangeHandler} value={title} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount</label>
                    <input name='amount' id='amount' type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date</label>
                    <input name='date' id='date' type='date' min='2019-01-01' value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;