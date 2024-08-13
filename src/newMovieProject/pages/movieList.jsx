import React, {useEffect, useState} from 'react';
import {Cards} from "./Cards.jsx";
import {MovieShow} from "../apiHandeling/movieApi.js";
import axios from "axios";
const api_key="api_key=c394922375334d374c45e8ffacbc0092";
// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
const now_playing ="https://api.themoviedb.org/3/"
import {Link} from 'react-router-dom'
import thefetchuse from "../hooks/thefetchuse.jsx";
export function MovieList() {
const{data:showMovies} = thefetchuse()



    return (<main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap ">
                    {showMovies.map((movie) => {

                    {return( <span key={movie.id}> <Cards movies={movie}/></span>)}
                })}
                </div>



            </section>


        </main>
    )


}

