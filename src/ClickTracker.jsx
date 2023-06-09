import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {lastButtonPressed: ''};
  }

  click = (buttonName) => {
    this.setState({
      lastButtonPressed: buttonName
    });
  };

  render() {
    const { lastButtonPressed } = this.state;

    return (
      <div>
        <h1>I know where you clicked: {lastButtonPressed}</h1>
        <button onClick={() => this.click('A')}>A</button>
        <button onClick={() => this.click('B')}>B</button>
        <button onClick={() => this.click('C')}>C</button>
      </div>
    );
  }
}

export default ClickTracker;
