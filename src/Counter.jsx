import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + (this.props.incrementAmount || 1)
      }));
    }, this.props.incrementInterval || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
