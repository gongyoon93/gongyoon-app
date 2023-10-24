import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);
  const increaseNum = () => {
    setNumber(num + 1);
  };
  const decreaseNum = () => {
    setNumber(num - 1);
  };
  return (
    <div>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
