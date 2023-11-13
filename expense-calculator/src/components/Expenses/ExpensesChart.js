import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) =>  {
    const locale = 'en-US';
    const monthsOfYear = [...Array(12).keys()].map(num => new Date(2023, num));
    const chartDataPoints = monthsOfYear.map(date => (
        {
            'label': date.toLocaleString(locale, { month: 'short' }),
            'value': 0
        }
    ));

    for (const expense of props.expenses) {
        chartDataPoints[expense.date.getMonth()].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;
