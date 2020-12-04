
import React from 'react';

import PropTypes from 'prop-types';

const Card = ({movies}) => (
    movies.map((movie,i) => {
        return (
            <div className="col-md-2 p-2" key={i}>
                <div className="card border-primary">
                    <img 
                        src={movie.Poster} 
                        alt={movie.Title} 
                        className="card-img-top" 
                        width="100"    
                    />
                    <div className="card-body">
                        <h5 className="my-2">{movie.Title} - {movie.Year}</h5>
                        <p>{movie.Type}</p>
                    </div>
                </div>
            </div>
        )
    })
);

Card.PropTypes = {
    movies: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired,
};


export default Card;