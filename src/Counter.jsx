import React, { useEffect } from 'react';
import useCounter from './useCounter';
import CounterDisplay from './CounterDisplay';

export default function Counter(props) {
  const { count, increment, decrement, reset } = useCounter(props.initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      increment(props.incrementAmount);
    }, props.incrementInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [increment, props.incrementAmount, props.incrementInterval]);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}



