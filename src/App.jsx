import React, { useState } from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

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
          <option value="tr">Turkce</option>
          <option value="ro">Română</option>
        </select>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
