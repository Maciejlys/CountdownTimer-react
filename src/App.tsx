import React, { useState, useEffect } from "react";
import "./App.css";
import { Counters } from "./Components/Counters";
import { Loading } from "./Components/Loading";
import { Navbar } from "./Components/Navbar";
import data from "./data/data.json";

const getNames = () => {
  return data.map((name) => name.name);
};

function App() {
  const [counters, setCounters] = useState(data);
  const [names, setNames] = useState([""]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNames(getNames());
    setCounters(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <main>
      <main
        className="load"
        style={{
          display: isLoading ? "flex" : "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "2",
        }}>
        <Loading />
      </main>
      <Navbar names={names} setIndex={setIndex} current={index} />
      <Counters counters={counters} index={index} />
    </main>
  );
}

export default App;
