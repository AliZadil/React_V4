import React from 'react';
import Age from './Age';

function Welcome({ name = 'Guest', age }) {
  const isValidAge = age > 18 && age < 65;
  return (
    <div>
      <p>Welcome, {name}!</p>
      {isValidAge && <Age age={age} />}
    </div>
  );
}

export default Welcome;