import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    // console.log("in Exepenses.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
