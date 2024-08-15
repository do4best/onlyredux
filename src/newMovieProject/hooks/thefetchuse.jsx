import {useEffect, useState} from 'react';

import PropTypes from "prop-types";
import axios from "axios";
import {api_key, now_playing} from "../apiHandeling/config.js";
function Thefetchuse({apiPath}) {
    const [data,setData] = useState([])

const url =`${now_playing}${apiPath}${api_key}`

    useEffect(() => {

        async  function FetchMovies(){


                const response=await axios.get(url)



                setData(response.data.results)



    }
        FetchMovies()}, [url]);
    return {data};
}

export default Thefetchuse;
Thefetchuse.propTypes={
    url:PropTypes.any
}