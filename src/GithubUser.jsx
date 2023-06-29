import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

function GithubUser({ username }) {
  const { data: userData, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { login, name, avatar_url, public_repos, followers, following } = userData;

  return (
    <div>
      <h2>{name}</h2>
      <img src={avatar_url} alt="Profile" />
      <p>Username: {login}</p>
      <p>Public Repositories: {public_repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}

export default GithubUser;
