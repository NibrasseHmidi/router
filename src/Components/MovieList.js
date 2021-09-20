import React from "react";
import Caro from "./Caro"
import MovieCard from "./MovieCard";
const MovieList = (props) => {

    return (
        <>

            <Caro />
            <div className="card-div">


                {props.movies.map((movie, index) =>
                    <MovieCard movie={movie} />
                )}</div>

        </>
    )
}

export default MovieList;