// components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='informations'>
      <img className='posters' src={movie.posterURL} alt={`${movie.title} poster`} />
      <h3 className='titels'>{movie.title}</h3>
      <p className='descreptions'>{movie.description}</p>
      <p className='rating'>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
