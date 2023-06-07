import React from 'react';
import Welcome from './Welcome.jsx';

function App() {
  return (
    <div>
      <Welcome 
        name={<strong>Adrian Antochi</strong>} 
        age={28} 
      />
      <Welcome name="John" age={77}></Welcome>
    </div>
  );
}

export default App;
