import React from 'react';
import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import {LanguageContext} from "./LanguageContext";


function App() {

  const [language, setLanguage] = React.useState("en");
  
   const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />

        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="ro">Română</option>
          <option value="tr">Türkçe</option>
        </select>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
