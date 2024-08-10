import React, {useEffect, useState} from 'react';
import {Cards} from "./Cards.jsx";
import {MovieShow} from "../apiHandeling/movieApi.js";
import axios from "axios";
const api_key="api_key=c394922375334d374c45e8ffacbc0092";
// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
const now_playing ="https://api.themoviedb.org/3/"
export function MovieList() {
const[showMovies,setShowMovies] = useState([])
async  function FetchMovies(){
try{
        const response =await MovieShow.fetchNowPlaying()
if(response.length>0){
setShowMovies(response[0])}


}catch(e){
    alert(e.message)
}}

    useEffect(() => {
        async function fetchNowPlaying(){
            const response= await fetch(`${now_playing}movie/now_playing?${api_key}`)
            const data = await response.json()

          setShowMovies(data.results);
        }
        fetchNowPlaying()
       }, []);

console.log(showMovies)
    return (<main>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-4 g-0">
                        {showMovies.map((movie)=>(
                            <Cards key={movie.id} movies={movie}/>
                        ))}
                    </div>


                </div>
            </section>
        </main>
    )


}

