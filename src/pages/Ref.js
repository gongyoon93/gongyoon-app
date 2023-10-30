import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default Ref;
// useRef
// useState와 useRef는 모두 값을 저장해 주지만 useState는 setState 함수 호출시 리렌더링이 일어나고 useRef는 object를 리턴해주며
// 값을 변경하여 리렌더링 일어나지 않는다. 다른 setState함수로도 리렌더링 되어도 ref 값은 유지가 된다(useState 값 유지되는 성질과 동일).
// 또 Ref의 값은 전생 주기를 통해 유지된다.(unMount시까지)
//  : 값의 변화는 감지하지만 리렌더링은 발생시키지 않기 위해 사용한다.

// useEffect(() => {
//   const timer = setInterval(() => {
//    console.log('타이머 돌아가는중...');
//   }, 1000);

//   return () => {
//    clearInterval(timer);
//   }
//  }, []);
//  : []는 dependency array이고 없는 경우 최초 렌더링(마운팅), 리렌더링시 내용 실행, 빈 배열일때 최초 렌더링시(마운팅)일 때만 내용 실행,
//  dependency item이 있는 경우 최초 렌더링(마운팅)과 item이 변경될 때 실행, return 함수가 있는 경우 언마운팅 될때 리턴 안의 내용 실행(ex.
//  setInterval)
