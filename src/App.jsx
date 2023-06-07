import React from 'react';
import Welcome from './Welcome.jsx';

function App() {
  return (
    <div>
      <Welcome 
        name={<strong>Adrian Antochi</strong>} 
        age={28} 
      />
      <Welcome name="Ali" age={77}></Welcome>
    </div>
  );
}

export default App;
