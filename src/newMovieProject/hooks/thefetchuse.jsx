import {useEffect, useState} from 'react';
import {MovieShow} from "../apiHandeling/movieApi.js";
import PropTypes from "prop-types";
function Thefetchuse() {
    const [data,setData] = useState([])

    async  function FetchMovies(){

        const response =await MovieShow.fetchNowPlaying()

        setData(response)




    }

    useEffect(() => {

        FetchMovies()

    }, []);
    return {data};
}

export default Thefetchuse;
Thefetchuse.propTypes={
    url:PropTypes.any
}