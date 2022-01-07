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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.filter(expense => expense.date === filterYear).map((filteredExpense) => (
        <ExpenseItem
          key={filteredExpense.id}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
          date={filteredExpense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
