import React, { useCallback, useState } from "react";
import Child from "../components/Child";

const Rmemo = () => {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링!");

  const tellMe = useCallback(() => {
    console.log("길동아 밥먹었니");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
};

export default Rmemo;
// React.memo + useMemo + useCallback

//React.memo는 상위 컴포넌트에서 하위 컴포넌트로 전달되는 prop check에만 의존시켜 렌더링시키는 hook이다.

//useMemo를 사용하기 전에는 객체타입의 주소가 다르기 때문에 name을 다르게 인식한다.

//memoization : 계산된 값을 메모리에 저장해 재사용 하는 것.
