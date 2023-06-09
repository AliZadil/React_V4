import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0 };
  }

  click = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.click}>Click me and see what happens!!!</button>
        <p>Click Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ClickCounter;