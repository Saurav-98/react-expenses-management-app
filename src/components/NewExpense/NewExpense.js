import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseDataHandler = (expenseData) => {
    const expenseDataReceived = {
      ...expenseData,
      id: Math.random().toFixed(3).toString(),
    };
    props.onreceiveNewExpense(expenseDataReceived);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSetExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
