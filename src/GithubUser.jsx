import React, { useEffect } from 'react';
import useGithubUser from './useGithubUser';
import './GithubUser.css';

function GithubUser({ username }) {
  const { userData, refetchUserData } = useGithubUser(username);

  useEffect(() => {
    if (username) {
      refetchUserData();
    }
  }, [username, refetchUserData]);

  if (!username) {
    return null;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  if (userData.message === 'Not Found') {
    return (
      <div className="container">
        <h2>User not found.</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={userData.avatar_url} alt="" className="profile-image" />
      <p>
        <h4>
          <u>Username</u>
        </h4>{' '}
        {userData.login}
      </p>
      <p>
        <h4>
          <u>Location</u>
        </h4>{' '}
        {userData.location}
      </p>
      <p>
        <b>Followers</b>: {userData.followers}, <b>Following</b>: {userData.following}
      </p>
      <p>
        <h4>
          <u>Public Repositories</u>
        </h4>{' '}
        {userData.public_repos}
      </p>
      <a href={userData.html_url}>
        <button>View on GitHub</button>
      </a>
    </div>
  );
}

export default GithubUser;
