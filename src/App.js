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
