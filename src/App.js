import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import Input3 from "./pages/Input3";
import UserList from "./pages/UserList";
import Time from "./pages/Time";
import Ref from "./pages/Ref";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> |{" "}
        <Link to="/input2">Input2</Link> | <Link to="/input3">Input3</Link> | |{" "}
        <Link to="/list">UserList</Link> | <Link to="/time">Time</Link> |{" "}
        <Link to="/ref">Ref</Link>
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
      </Routes>
    </div>
  );
}

export default App;
