import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Water",
      amount: 101,
      date: new Date(2021, 0, 1),
    },
    {
      id: "e2",
      title: "Electricity",
      amount: 102,
      date: new Date(2021, 1, 1),
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
