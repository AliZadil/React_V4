import React from 'react';
import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <Counter initialValue={10} incrementAmount={2} incrementInterval={1000} />
    </div>
  );
}

export default App;