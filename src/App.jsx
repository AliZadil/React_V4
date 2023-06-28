import React from 'react';
import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import {LanguageContext} from "./LanguageContext";
import CustomCounter from "./CustomCounter";

class App extends React.Component {
  render() {
    return (
      <div>
        <CustomCounter />
      </div>
    )
  }
}

export default App;
