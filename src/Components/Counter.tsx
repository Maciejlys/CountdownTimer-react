import React, { useEffect, useState } from "react";
import { SingleCounter } from "./Counters";
import { countDownInterval } from "../Utils/dateUtil";

export const Counter: React.FC<SingleCounter> = ({
  id,
  name,
  dueDate,
  dueTime,
}) => {
  const [targetTime, setTargetTime] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newDate = countDownInterval(dueDate, dueTime);
      setTargetTime(newDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [id, dueDate, dueTime]);

  const [days, hours, minutes, seconds] = targetTime;

  return (
    <h1>
      {days}d {hours}h {minutes}m {seconds}s
    </h1>
  );
};
