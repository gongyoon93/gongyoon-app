import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../pages/Counter";
import Input from "../pages/Input";
import Input2 from "../pages/Input2";
import Input3 from "../pages/Input3";
import UserList from "../pages/UserList";
import Time from "../pages/Time";
import Ref from "../pages/Ref";
import Ref2 from "../pages/Ref2";
import Calculate from "../pages/Calculate";
import Memo from "../pages/Memo";
import Callback from "../pages/Callback";
import Callback2 from "../pages/Callback2";
import Rmemo from "../pages/Rmemo";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <nav style={{ paddingBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> |{" "}
        <Link to="/input2">Input2</Link> | <Link to="/input3">Input3</Link> | |{" "}
        <Link to="/list">UserList</Link> | <Link to="/time">Time</Link> |{" "}
        <Link to="/ref">Ref</Link> | <Link to="/Ref2">Ref2</Link> |{" "}
        <Link to="/calculate">Calculate</Link> | <Link to="/Memo">Memo</Link>|{" "}
        <Link to="/callback">Callback</Link> |{" "}
        <Link to="/callback2">Callback2</Link>| <Link to="/rmemo">Rmemo</Link>|{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/Input3" element={<Input3 />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/time" element={<Time />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/ref2" element={<Ref2 />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/callback2" element={<Callback2 />} />
        <Route path="/rmemo" element={<Rmemo />} />
      </Routes>
    </div>
  );
};

export default Content;
