import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpensesData = [
  {
    id: "i2s",
    title: "caw",
    amount: 23.4,
    date: new Date(2020, 2, 12),
  },
  {
    id: "i24",
    title: "car",
    amount: 234.009,
    date: new Date(2021, 5, 12),
  },
  {
    id: "i2",
    title: "carouse",
    amount: 94.6,
    date: new Date(2022, 10, 12),
  },
  {
    id: "i32",
    title: "carouse 2",
    amount: 234.64,
    date: new Date(2022, 9, 12),
  },
  {
    id: "i2er",
    title: "canoes",
    amount: 234.6,
    date: new Date(2019, 9, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpensesData);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
