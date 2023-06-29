import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import CustomCounter from './CustomCounter';
import FilteredList from './FilteredList';
import Counter from './Counter';
import InteractiveWelcome from './InteractiveWelcome';
import ShowGithubUser from "./ShowGithubUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InteractiveWelcome />} />
        <Route path="/counter" element={<Counter initialValue={10} incrementAmount={2} incrementInterval={500} />} />
        <Route path="/users/:username" element={<ShowGithubUser></ShowGithubUser>} />
        <Route path="/*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <div>
        <p>Links</p>
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to={"/users/AliZadil"}>My Github Profile</Link>
        <br />
        <Link to={"/users/doublemacro"}>Adrian</Link>
      </div>
    </div>
  );
}
