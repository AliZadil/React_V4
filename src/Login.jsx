import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    const { username, password } = this.state;

    onLogin({ username, password });
  };

  render() {
    const { username, password } = this.state;
    const isDisabled = username === '' || password === '';

    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <button onClick={this.handleLogin} disabled={isDisabled}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
