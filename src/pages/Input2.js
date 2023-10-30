import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="text" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="text" id="tel" value={tel} onChange={onChange} />
      </div>
      <br />
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input2;
// useState
// const [names, setNames] = useState(["사과", "오렌지"]) : useState는 state와 setState를 배열로 리턴
// setState((prevState) => {return [input, ...prevState]}); : setState함수 안에 callback 함수 사용시 prevState를 인자로 사용 가능
// useState(() =>{"a","b"}); : useState 초기값에 callback 함수 사용시 최초 로딩시에만 초기값 설정 또는 함수 실행
