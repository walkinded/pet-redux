import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/debounce';
import './InputSearch.css';

const InputSearch = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <div className='InputSearch_wrap'>
      <input
        type='text'
        placeholder='Search for Github username'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='result'>Hello there</div>
    </div>
  );
};

export default InputSearch;
