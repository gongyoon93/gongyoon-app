import React, { useState } from "react";

const Input3 = () => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const [names, setNames] = useState(() => {
    return ["홍길동", "김민수"];
  });

  const uploadName = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={uploadName}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default Input3;
// 배열에 input state 값 받아와 추가
