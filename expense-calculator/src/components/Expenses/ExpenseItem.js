import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const title = props.expense.title;
    const amount = props.expense.amount;
    const date = props.expense.date;
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>€{amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
