import React, { memo } from "react";

const Child = ({ name, tellMe }) => {
  console.log("자녀 컴포넌트도 렌더링!");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>이름: {name}</p>
      <button onClick={tellMe}>엄마 나 밥 먹었어</button>
    </div>
  );
};

export default memo(Child);
//React.memo는 React에서 제공되는 hoc(고차 컴포넌트)로 최적화 된다.
