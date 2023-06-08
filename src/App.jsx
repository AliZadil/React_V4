import React from 'react';
import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <Counter initialValue={10} incrementAmount={2} incrementInterval={500} />
    </div>
  );
}

export default App;
