import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevNum) => ({
        count: prevNum.count + 1
      }));
    }, 1000);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;