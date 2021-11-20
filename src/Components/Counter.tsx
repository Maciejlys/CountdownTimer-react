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
  const [expired, setExpired] = useState(true);

  useEffect(() => {
    let interval = setInterval(async () => {
      let newDate = countDownInterval(dueDate, dueTime);
      await setTargetTime(newDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [id, dueDate, dueTime]);

  console.log("XD");

  const [days, hours, minutes, seconds] = targetTime;

  {
    expired && <h1>Expired</h1>;
  }
  return (
    <h1>
      {days}d {hours}h {minutes}m {seconds}s
    </h1>
  );
};
