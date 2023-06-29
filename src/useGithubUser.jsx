import { useEffect, useState, useCallback } from 'react';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  const fetchUserData = useCallback(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.log(error));
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [fetchUserData, username]);

  const refetchUserData = useCallback(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { userData, refetchUserData };
}

export default useGithubUser;
