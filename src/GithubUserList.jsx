import React, { useState } from 'react';
import GithubUser from './GithubUser';

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddUser = () => {
    setUsernames((prevUsernames) => [...prevUsernames, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {usernames.map((username, index) => (
        <GithubUser key={index} username={username} />
      ))}
    </div>
  );
}

export default GithubUserList;
