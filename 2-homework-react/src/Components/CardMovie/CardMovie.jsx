import React from 'react'
import { movies } from '../../db/data'
import "./CardMovie.css"

const CardMovie = () => {
  return (
    <div>
      <div className="container">
            <h2 className='movie-title'>Movies</h2>
            <div className="card-content">
                    {
                        movies.map(movie => 
                            <div className="movie-card">
                                <div className="movie-card-img">
                                    <img src={movie.img} alt={movie.name} />
                                </div>
                                <div className="movie-card-body" >
                                    <h4>
                                    {60 < movie.duration
                                        ? Math.floor(movie.duration / 60) +
                                        " h " +
                                        (movie.duration % 60) +
                                        " m"
                                        : movie.duration + " m"}
                                    </h4>
                                        <h2>
                                            {movie.name}
                                        </h2>
                                        
                                    <span>
                                        {movie.genre}
                                    </span>
                                    <button className='movie-btn'><a target='_blank' className='movie-link-btn' href={"https://t.me/english_movies_atom/" + movie.watch}>Watch</a></button>
                                   
                                </div>
                                <div className="box">
                                        <strong>
                                            {movie.year}
                                        </strong>
                                        <small>
                                            {movie.imdb}
                                        </small>
                                </div>
                            </div>
                        )
                    }
            </div>
      </div>
    </div>
  )
}

export default CardMovie
