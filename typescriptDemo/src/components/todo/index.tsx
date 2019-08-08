import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./todo.scss";

function Todo() {
  const inputEl = useRef(null);
  const [input, setInput] = useState<string>("");
  const [List, setList] = useState<string[]>([]);
  const onsubmit = (): void => {
    const arr: string[] = List;
    arr.push(input);
    setList(() => arr);
    setInput('');
    console.log(input);
    console.log(List);
  };
  return (
    <div className="container">
      <div>
        <input
          onChange={e => setInput(e.currentTarget.value)}
          type="text"
          className="input"
        />
        <button className="button" onClick={onsubmit}>
          提交
        </button>
      </div>
      <ul className="list-wrap">
        {List.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </ul>
    </div>
  );
}
export default Todo;
