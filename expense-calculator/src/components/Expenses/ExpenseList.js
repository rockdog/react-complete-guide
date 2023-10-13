import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    return (
        <Card className='expenses'>
            {props.expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
        </Card>
    );
}

export default ExpenseList;
