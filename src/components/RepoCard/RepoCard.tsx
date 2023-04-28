import React, { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { IRepo } from '../../models/models';
import './RepoCard.css';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const AddToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };
  return (
    <div className='item'>
      <h2>{repo.full_name}</h2>
      <p>
        <span>Forks: {repo.forks}</span>
        <span>Watchers: {repo.watchers}</span>
      </p>
      <small>{repo?.description}</small>
      {isFav ? (
        <button onClick={removeFromFavourite}>Delete</button>
      ) : (
        <button onClick={AddToFavourite}>Add</button>
      )}
    </div>
  );
};

export default RepoCard;
