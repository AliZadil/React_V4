import React from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends React.Component {
  strings = {
    en: {
      LANGUAGE: "English",
      SELECT_LANGUAGE: "Select language: ",
      SELECTED_LANGUAGE: "Selected language: ",
    },
    tr: {
      LANGUAGE: "Turkce",
      SELECT_LANGUAGE: "Dil secin: ",
      SELECTED_LANGUAGE: "Secili dil: ",
    },
    it: {
      LANGUAGE: "Italiano",
      SELECT_LANGUAGE: "Seleziona la lingua: ",
      SELECTED_LANGUAGE: "Lingua selezionata: ",
    },
    ro: {
      LANGUAGE: "Română",
      SELECT_LANGUAGE: "Selecteaza limba: ",
      SELECTED_LANGUAGE: "Limba selectată: ",
    },
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => (
          <div>
            <h1>{this.strings[language].LANGUAGE}</h1>
            <div>
              {this.strings[language].SELECTED_LANGUAGE}{" "}
              {this.strings[language].LANGUAGE}
            </div>
            <label>{this.strings[language].SELECT_LANGUAGE}</label>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
