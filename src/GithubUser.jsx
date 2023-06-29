import React from 'react';
import useGithubUser from './useGithubUser';

function GithubUser({ username }) {
  const { userData, error, loading } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return null;
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
