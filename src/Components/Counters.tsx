import React from "react";
import { Counter } from "./Counter";
import "../Styles/Counters.css";

interface CountersProps {
  counters: SingleCounter[];
  index: number;
}

export interface SingleCounter {
  id: string;
  name: string;
  dueDate: string;
  dueTime: string;
}

export const Counters: React.FC<CountersProps> = ({ counters, index }) => {
  return (
    <section className="mid">
      <div className="name">
        <h2>{counters[index].name}</h2>
      </div>
      <div className="counter">
        <Counter {...counters[index]} />
      </div>
    </section>
  );
};
