import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Water",
    amount: 101,
    date: new Date(2019, 0, 1),
  },
  {
    id: "e2",
    title: "Electricity",
    amount: 102,
    date: new Date(2020, 1, 1),
  },
  {
    id: "e3",
    title: "Food",
    amount: 103,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e4",
    title: "Cell",
    amount: 104,
    date: new Date(2021, 3, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
