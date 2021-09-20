import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-star-rating-component';

const MovieCard = ({ movie }) => {
    return (
<>


<div className="flex">
 <Link to={`/details/${movie.id}`}>
  <figure className="photo">
  <img src={movie.posterURL} alt=""/>
    <figcaption>
   
      <h2>{movie.title} </h2>
      
      <ReactStars className="start"
    count={5}
    activeColor="#ffd700"
     value={movie.rate}

     
  />
  
    </figcaption>
   
  </figure>
</Link>
</div>

</>
       
    )
}

export default MovieCard
