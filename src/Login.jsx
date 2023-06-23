import React from 'react';
import useFormInput from './useFormInput';

export default function Login({ onLogin }) {
  const username = useFormInput('');
  const password = useFormInput('');
  const remember = useFormInput(false);

  const handleLogin = () => {
    onLogin({ username: username.value, password: password.value });
  };

  const isDisabled = username.value === '' || password.value === '';

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username.value}
        onChange={username.onChange}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        name="password"
        value={password.value}
        onChange={password.onChange}
        placeholder="Password"
      />
      <br />
      <label>
        <input
          type="checkbox"
          name="remember"
          checked={remember.value}
          onChange={remember.onChange}
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
