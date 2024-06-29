import React from 'react';
import { useGithubUser } from './useGithubUser';

const GithubProfile = ({ username }) => {
  const { user, error, loading, refetch } = useGithubUser(username);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default GithubProfile;
