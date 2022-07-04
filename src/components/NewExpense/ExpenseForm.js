import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [formData, setFormData] = React.useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const formChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            name="enteredTitle"
            onChange={formChangeHandler}
            type="text"
            value={formData.enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            name="enteredAmount"
            onChange={formChangeHandler}
            type="number"
            value={formData.enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            name="enteredDate"
            onChange={formChangeHandler}
            type="date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            value={formData.enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
