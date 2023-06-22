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

  const { login, name, avatar_url, public_repos, followers, following } = userData;

  return (
    <div>
      <h2>{name}</h2>
      <img src={avatar_url} alt={login} />
      <p>Username: {login}</p>
      <p>Public Repositories: {public_repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}

export default GithubUser;