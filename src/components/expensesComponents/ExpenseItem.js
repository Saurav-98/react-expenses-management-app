import React, { useState } from "react";
import Card from "../UI-Components/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, amount, title }) => {
  const [titleData, setTitleData] = useState(title);
  function clickHandler() {
    setTitleData("New Title Here");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate dateProp={date} />
      <div className="expense-item__description">
        <h2>{titleData}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
