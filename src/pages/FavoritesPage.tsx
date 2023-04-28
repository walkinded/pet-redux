import React from 'react';
import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length <= 0) return <p>No items</p>;
  return (
    <ul>
      {favourites.map((f) => (
        <li key={f}>
          <a href={f} target='_blank' rel='noreferrer'>
            {f}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FavouritesPage;
