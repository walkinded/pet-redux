import React, { useEffect, useState } from 'react';
import './Pages.css';
import '../components/RepoCard/RepoCard.css';
import { useDebounce } from '../hooks/debounce';
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/github/github.api';
import RepoCard from '../components/RepoCard/RepoCard';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: isReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  const cleckHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0);
  }, [debounced, users]);

  return (
    <div className='page_container'>
      {isError && <p>Something went wrong</p>}

      <div className='inputSearch_wrap'>
        <input
          type='text'
          placeholder='Search for Github username'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className='result'>
            {isLoading && <p>Loading...</p>}
            {users?.map((user) => (
              <li key={user.id} onClick={() => cleckHandler(user.login)}>
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='container'>
        {isReposLoading && <p>Loading</p>}
        {repos?.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
