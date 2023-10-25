import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);

  const onClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={onClick}>Update</button>
    </div>
  );
};

export default Time;
