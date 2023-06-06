import React from 'react';
import Age from './Age';

function Welcome({ name = 'Guest', age = 'Unknown' }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age>18 ? <Age age={age}></Age>: ''}
    </div>
  );
}

export default Welcome;