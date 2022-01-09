import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    // console.log("in Exepenses.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpense.length === 0 && <p>No expenses found.</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
