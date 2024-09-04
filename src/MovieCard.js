// components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className='informations'>
      <img className='posters' src={movie.posterURL} alt={`${movie.title} poster`} />
      <h3 className='titels'>{movie.title}</h3>
      <p className='descreptions'>{movie.description}</p>
      <p className='rating'>Rating: {movie.rating}</p>
      <Link to={`/trailer/${movie.id}`}><button className='trailer'>Trailer</button></Link>
      
      
    </div>
  );
};

export default MovieCard;
