import React from 'react';
import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ToDoList
        render={(items, removeItem) => (
          <ul>
            {items.map((item, index) => (
              <li key={item}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;