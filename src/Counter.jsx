import React from 'react';
import CounterDisplay from './CounterDisplay';
import useCounter from './useCounter';

export default function Counter(props) {
  const { count, increment, decrement, reset } = useCounter(props.initialValue);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}