import React from "react";
import { Counter } from "./Counter";

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
    <section>
      <Counter {...counters[index]} />
    </section>
  );
};
