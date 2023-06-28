import React from 'react';
import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import {LanguageContext} from "./LanguageContext";
import CustomCounter from "./CustomCounter";
import FilteredList from "./FilteredList";

export default function App() {
  const list = [
    { id: 1, name: "John", age: 24 },
    { id: 2, name: "Emily", age: 32 },
    { id: 3, name: "Michael", age: 19 },
    { id: 4, name: "Sarah", age: 27 },
    { id: 5, name: "Daniel", age: 20 },
    { id: 6, name: "Sophia", age: 29 },
  ];

  return (
    <div className="container">
      <FilteredList list={list} />
    </div>
  );
}

