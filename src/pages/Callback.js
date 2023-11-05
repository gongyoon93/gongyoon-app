import React, { useEffect, useState, useCallback } from "react";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunc이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={() => someFunction()}>Call someFunc</button>
    </div>
  );
};

export default Callback;
//변수에 할당한 함수객체도 객체 타입이기 때문에 리렌더링(코드 재실행)시 다른 메모리 공간이 할당되고 변수에
//그 주소가 담긴다.

//useMemo는 반복사용되는 return 값을, useCallback은 Callback 함수(객체함수)를 메모이제이션 한다.
