import React, {useContext} from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage() {

    const language = useContext(LanguageContext);

    const strings = {
        en: {
            LANGUAGE: "English",
            SELECT_LANGUAGE: "Select language: ",
            SELECTED_LANGUAGE: "Selected language: ",
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
        tr: {
          LANGUAGE: "Türkçe",
          SELECT_LANGUAGE: "Dil seç: ",
          SELECTED_LANGUAGE: "Seçilen Dil: ",
        },
    }

    return (
        <div>
          <div>
            {strings[language].SELECTED_LANGUAGE} {strings[language].LANGUAGE}
          </div>
          <label>{strings[language].SELECT_LANGUAGE}</label>
        </div>
    );
};