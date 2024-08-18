import axios from "axios";
// import {Fake_popular, Fake_recommendation} from "./fake_data.jsx";

import {api_key,now_playing,popular_movies,top_trending} from "./config.js";

export  class MovieShow{
    static async fetchNowPlaying(){
        const response= await axios.get(`${now_playing}movie/now_playing?${api_key}`)

        return response.data.results;

        // return Fake_popular;


    }


}
