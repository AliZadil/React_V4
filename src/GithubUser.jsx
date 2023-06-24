import React from 'react';
import useGithubUser from './useGithubUser';
import './GithubUser.css';

function GithubUser({ username }) {
  const userData = useGithubUser(username);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { login, name, avatar_url, public_repos, followers, following } = userData;

  return (
    <div className="github-user">
      <h2>{name}</h2>
      <img className="profile-image" src={avatar_url} alt="Profile" />
      <p>Username: {login}</p>
      <p>Public Repositories: {public_repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
}

export default GithubUser;
