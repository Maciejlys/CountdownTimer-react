import React, { useEffect, useState } from "react";
import { SingleCounter } from "./Counters";
import { countDownInterval } from "../Utils/dateUtil";
import { Loading } from "./Loading";

export const Counter: React.FC<SingleCounter> = ({
  id,
  name,
  dueDate,
  dueTime,
}) => {
  const [targetTime, setTargetTime] = useState([0, 0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let interval = setInterval(() => {
      setTargetTime(() => {
        setIsLoading(false);
        let newDate = countDownInterval(dueDate, dueTime);
        newDate.map((date) => {
          if (date < 0) {
            setIsExpired(true);
            clearInterval(interval);
          } else {
            setIsExpired(false);
          }
        });
        return newDate;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [id, dueTime, dueDate]);

  const [days, hours, minutes, seconds] = targetTime;
  if (isLoading) {
    return <Loading />;
  }
  if (isExpired) {
    return <h1>Expired</h1>;
  }
  return (
    <h1>
      {days}d {hours}h {minutes}m {seconds}s
    </h1>
  );
};
