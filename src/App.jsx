import React from 'react';
import Login from './Login';

function App() {
  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
