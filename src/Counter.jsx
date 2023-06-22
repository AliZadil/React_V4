import React, { useEffect, useState } from 'react';
import CounterDisplay from './CounterDisplay';

export default function Counter(props) {
  const [count, setCount] = useState(props.initialValue || 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + (props.incrementAmount || 1));
    }, props.incrementInterval || 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.incrementAmount, props.incrementInterval]);

  return <CounterDisplay count={count} />;
}
