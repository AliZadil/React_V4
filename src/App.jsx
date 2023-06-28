import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import {LanguageContext} from "./LanguageContext";
import CustomCounter from "./CustomCounter";
import FilteredList from "./FilteredList";
import Counter from "./counter"
import InteractiveWelcome from "./InteractiveWelcome";

export default function App() {
  return (   
    <div>
      <div>
        <Routes>
          <Route path="/" element={<InteractiveWelcome />}></Route>
          <Route path="/counter" element={<Counter></Counter>}></Route>
        </Routes>
      </div>
      <div>
        <p>Links</p>
        <Link to={"/counter"}>Counter</Link>
      </div>
    </div>
  )
}