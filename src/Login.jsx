import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleChange = (ev) => {
    if (ev.target.name === 'username') {
      setUsername(ev.target.value);
    } else if (ev.target.name === 'password') {
      setPassword(ev.target.value);
    } else if (ev.target.name === 'remember') {
      setRemember(ev.target.checked);
    }
  };

  const handleLogin = () => {
    onLogin({ username, password });
  };

  const isDisabled = username === '' || password === '';

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <br />
      <label>
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
        Remember me
      </label>
      <br />
      <button onClick={handleLogin} disabled={isDisabled}>
        Login
      </button>
    </div>
  );
}