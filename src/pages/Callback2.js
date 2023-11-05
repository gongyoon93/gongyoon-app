import React, { useCallback, useState } from "react";
import Box from "../components/Box";

const Callback2 = () => {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default Callback2;
//useCallback 사용하지 않을 시 함수객체가 다시 만들어지고 주소가 변수에 재할당 되면서 props에 전달이 되어
// > Box Component 리렌더링
