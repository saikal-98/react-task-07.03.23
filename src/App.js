import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import Person from "./components/Person";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  const addInput = (e) => {
    setText(e.target.value);
  };

  const addText = (e) => {
    if (!text) {
      alert("input is empty");
    }
    const newText = {
      text: text,
      id: Date.now(),
    };

    setDisplay([...display, newText]);
    setText("");
  };

  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];

  function totalSalary() {
    employees.map((item) => {
      return item.days * item.salaryPerDay;
    });
  }

  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph addInput={addInput} addText={addText} display={display} />
      <Person employees={employees} totalSalary={totalSalary} />
    </div>
  );
};

export default App;
