import React, { useState } from 'react';

function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;