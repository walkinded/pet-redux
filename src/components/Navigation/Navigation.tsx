import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='nav'>
      <h3>Github Search</h3>
      <span>
        <Link to={'/'}>Home</Link>
        <Link to={'/fav'}>Favourite</Link>
      </span>{' '}
    </nav>
  );
};

export default Navigation;
