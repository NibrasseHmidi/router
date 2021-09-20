import React from 'react'
import { Link } from 'react-router-dom';

const Details = ({movies,match}) => {
    const film = movies.find((el)=>Number(el.id)===Number(match.params.id));
    return (
     <div className="section">
         <div className="container-blog">
            <div className="content">
                <div className="content-img">
                    <img src={film.posterURL} alt=""/>
                </div>
               
                <div className="content-text">
                    <h2 className="content-title">{film.title}</h2>
                   
                    <p className="content-paragraph">{film.description}</p>
                   
                     <Link to="/">
                       <button className="btn">رجوع  </button>
</Link>
                   
                </div>
            </div>
        </div>

         </div>
          


        
     
    )
}

export default Details
