import React, { useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function GithubUserList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleList = () => {
    setList((arr) => [...arr, input]);
    setInput("");
  };

  return (
    <div>
      <input
        onChange={handleInput}
        placeholder="Enter a GitHub username"
        value={input}
      />
      <button onClick={handleList}>Add User</button>
      <button onClick={() => setList([])}>Clear</button>

      <div>
        {list.map((user) => (
          <div key={user}>
            <Link to={`/users/${user}`}>{user}</Link>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
