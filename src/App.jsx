import React from 'react';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
  };

  return (
    <div>
      <UncontrolledLogin></UncontrolledLogin>
    </div>
  );
}

export default App;
