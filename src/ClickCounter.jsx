import React, { useState, useEffect } from 'react';

export default function ClickCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onCounterChange(count);
  }, [count, props.onCounterChange]);

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