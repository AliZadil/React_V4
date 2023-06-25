import React from 'react';
import CarDetails from './CarDetails';

function App() {
  return (
    <div>
      <h1>Car Details Form</h1>
      <CarDetails initialData={{model:"Audi A1",year:"2013",color:"White"}} />
    </div>
  );
}

export default App;
