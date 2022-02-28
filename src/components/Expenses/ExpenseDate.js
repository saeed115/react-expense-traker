import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.toLocaleString("ar", { year: "numeric" });
  // const year = props.date.getFullYear();
  const month = props.date.toLocaleString("ar", { month: "long" });
  const day = props.date.toLocaleString("ar", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
