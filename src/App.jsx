import React from 'react';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';

function App() {
  return (
    <div>
      <GithubUserList />
      <GithubUser username="AliZadil" />
    </div>
  );
}

export default App;
