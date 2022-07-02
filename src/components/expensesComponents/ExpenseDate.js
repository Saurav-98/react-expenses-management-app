import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ dateProp }) => {
  const month = dateProp.toLocaleString("en-US", { month: "long" });
  const date = dateProp.getUTCDate();
  const year = dateProp.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
