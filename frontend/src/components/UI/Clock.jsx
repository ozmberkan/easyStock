import React, { useState, useEffect } from "react";
import { TbClock } from "react-icons/tb";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <span className="text-sm font-medium text-neutral-500 flex gap-x-1 items-center">
      <TbClock />
      {time.toLocaleTimeString()}
    </span>
  );
};

export default Clock;
