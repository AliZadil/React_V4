import React from 'react';

function Welcome(props) {
  const { name } = props;
  return <p>Welcome, {name}!</p>;
}

Welcome.defaultProps = {
  name: 'Guest',
};

export default Welcome;