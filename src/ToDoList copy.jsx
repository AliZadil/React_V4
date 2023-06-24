import React, { Component } from "react";

export default class ToDoList extends Component {
  state = {
    items: ["Is", "this", "what", "you", "wanted?"],
    newTodo: "",
  };

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.newTodo],
      newTodo: "",
    }));
  };

  resetItems = () => {
    this.setState({
      items: [],
    });
  };

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  removeItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== index),
    }));
  };

  render() {
    const { items, newTodo } = this.state;
    const { render } = this.props;

    return (
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.resetItems}>Reset</button>
        {render(items, this.removeItem)}
      </div>
    );
  }
}