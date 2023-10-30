import React, { useEffect, useRef } from "react";

const Ref2 = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Ref2;
//태그 ref 속성에 useRef 값을 넣고 DOM 요소에 접근할 수 있다.
