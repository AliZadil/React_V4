import React from 'react';
import Welcome from './Welcome.jsx';

function App() {
  return (
    <div>
      <Welcome name="Adrian Antochi" age={28} />
      <Welcome />
    </div>
  );
}

export default App;
