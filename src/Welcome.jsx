import React from 'react';
import Age from './Age';

function Welcome({ name = 'Guest', age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age && <Age age={age} />}
    </div>
  );
}

export default Welcome;