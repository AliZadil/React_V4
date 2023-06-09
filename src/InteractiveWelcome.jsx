import React, { Component } from 'react';
import Welcome from './Welcome';

class InteractiveWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = (ev) => {
    this.setState({
      name: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;