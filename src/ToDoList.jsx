import React from "react"

export default class ToDoList extends React.Component {
    state = {
        items: ["Is", "this", "what", "you", "wanted?"],
        newTodo: "",
    }
    addItem = () => {
        this.setState(state => ({
            items: [...state.items, state.newTodo],
        }))
        this.setState({
            newTodo: "",
        })
    }
    render() {
        return <div>
            <input type="text" name="newTodo" value={this.state.newTodo} onChange={(event) => {
                this.setState({ newTodo: event.target.value})
            }} />
            <button onClick={this.addItem}>Add</button>
            <ul>
                {this.state.items.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    }
}