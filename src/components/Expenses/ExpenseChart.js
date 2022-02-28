import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "يانير", value: 0 },
    { label: "فبراير", value: 0 },
    { label: "مارس", value: 0 },
    { label: "ابريل", value: 0 },
    { label: "مايو", value: 0 },
    { label: "يونيو", value: 0 },
    { label: "يوليو", value: 0 },
    { label: "اغسطس", value: 0 },
    { label: "سيتمبر", value: 0 },
    { label: "اكتوبر", value: 0 },
    { label: "نوفمبر", value: 0 },
    { label: "ديسمبر", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
