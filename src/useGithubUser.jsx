import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

function useGithubUser(username) {
  const shouldFetch = !!username; // Check if the username is not null

  const { data: userData, error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  return {
    userData,
    error,
    loading: !userData && !error
  };
}

export default useGithubUser;
