import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [viewBool, setViewBool] = useState(false);

  // const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //  return {
    //    ...prevState,
    //    enteredTitle: event.target.value,
    //  };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    changeView(false);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    changeView(false);
  };

  const changeView = (bool) => {
    setViewBool(bool);
  };

  const minForm = (
    <div className="new-expenese__actions">
      <button type="button" onClick={() => changeView(true)}>
        New Expense
      </button>
    </div>
  );

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      {viewBool === false && minForm}
      {viewBool === true && (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="reset">Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
