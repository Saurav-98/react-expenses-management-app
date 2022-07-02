import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseProp }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenseProp[0].title}
        date={expenseProp[0].date}
        amount={expenseProp[0].amount}
      />
      <ExpenseItem
        title={expenseProp[1].title}
        date={expenseProp[1].date}
        amount={expenseProp[1].amount}
      />

      <ExpenseItem
        title={expenseProp[2].title}
        date={expenseProp[2].date}
        amount={expenseProp[2].amount}
      />

      <ExpenseItem
        title={expenseProp[3].title}
        date={expenseProp[3].date}
        amount={expenseProp[3].amount}
      />
    </div>
  );
};

export default Expenses;
