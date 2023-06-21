import React, { useState } from 'react';
import ClickCounter from './ClickCounter';

function App() {
  const handleCounterChange = (counterValue) => {
    console.log('Counter changed:', counterValue);
  };

  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;
