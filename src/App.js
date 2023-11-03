import React, { useState } from "react";

import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />;
    </ThemeContext.Provider>
  );
}

export default App;

//Context의 Provider는 value 라는 prop을 받는다.
//createContext('hello')로 생성 후 Provider로 감싸지 않은 경우 변수가 아닌 초기값을 사용할 수 있다.
//const {isDark, setIsDark} = useContext(ThemeContext)
