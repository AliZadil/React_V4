import React from 'react';

function Welcome({ name = 'Guest', age = 'Unknown' }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>Your age is {age}</p>
    </div>
  );
}

export default Welcome;