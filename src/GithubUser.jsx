import React, { useEffect, useState } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.log(error));
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  console.log(userData); // to see the keys

  const { login, name, public_repos, followers, following } = userData;

  return (
    <div>
      <h2>{name}</h2>
      <p>Username: {login}</p>
      <p>Public Repositories: {public_repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}

export default GithubUser;