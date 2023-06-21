import React, { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={click}>Click me and see what happens!!!</button>
      <p>Click Count: {count}</p>
    </div>
  );
}