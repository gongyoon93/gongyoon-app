import React, { useEffect, useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <hr />
      <h2>어느 나라에 왔어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
};

export default Memo;
//원시타입 : String, Number, Boolean, Null, Undefined, BigInt, Symbol
//객체타입 : Object, Array, ... 메모리상의 공간을 할당받아 객체를 저장하고 그 주소가 변수에 저장된다.
// 객체의 경우 변수라는 상자 안에는 메모리상의 주소만 담기고 메모리에 객체가 저장된다.
// 또 렌더링(코드가 재실행) 되면 다른 메모리 상의 공간에 저장이 된다. 주소가 다른 location 변수로 인식하기 때문에
// 위 useEffect가 실행됨. useMemo로 이것을 막을 수 있다.
