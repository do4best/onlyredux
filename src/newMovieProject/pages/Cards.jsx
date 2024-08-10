import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
export function Cards({...movies}) {
const{id,original_title,poster_path,overview} = movies;
const imagesFind = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    return (<main>


                    <div className="card" style={{width: "18rem"}} >
                        <Link to={`/movie/${id}`}>
                        <img src={imagesFind} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <Link to={`/movie/${id}`}>
                                <h5 className="card-title">{original_title}</h5> </Link>
                            <Link to={`/movie/${id}`}>
                            <p className="card-text">{overview}</p>
                            </Link>

                        </div>
                    </div>

    </main>)


}

Cards.propTypes={
    movies:PropTypes.any
}