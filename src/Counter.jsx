import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
  state = {
    count: this.props.initialValue || 0
  };

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
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;

// no longer requires a constructor //