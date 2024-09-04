import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({movies}) => {
    const {id} = useParams();
    const foundMovies = movies.find((el) => el.id === +id);
  return (
    <div>
      <h3>{foundMovies.title}</h3>
      <p>{foundMovies.description}</p>
      <iframe width="560"
       height="315" 
       src={foundMovies.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      </iframe>
      <Link to={'/'}><button className='home'>Back to home </button></Link>
    </div>
  )
}

export default Trailer
