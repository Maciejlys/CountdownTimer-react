import React, { useState, useEffect } from "react";
import "./App.css";
import { Counters } from "./Components/Counters";
import { Navbar } from "./Components/Navbar";
import data from "./data/data.json";

const getNames = () => {
  return data.map((name) => name.name);
};

function App() {
  const [counters, setCounters] = useState(data);
  const [names, setNames] = useState(getNames());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getNames();
  }, []);

  return (
    <main>
      <Navbar names={names} setIndex={setIndex} current={index} />
      <Counters counters={counters} index={index} />
    </main>
  );
}

export default App;
