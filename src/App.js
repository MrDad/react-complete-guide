import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Title1",
      amount: 101,
      date: new Date(2021, 0, 1),
    },
    {
      id: "e2",
      title: "Title2",
      amount: 102,
      date: new Date(2021, 1, 1),
    },
    {
      id: "e3",
      title: "Title3",
      amount: 103,
      date: new Date(2021, 2, 1),
    },
    {
      id: "e4",
      title: "Title4",
      amount: 104,
      date: new Date(2021, 3, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
