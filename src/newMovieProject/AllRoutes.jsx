import {Routes,Route} from "react-router-dom";
import {MovieList,MovieDetails,Search,NotFound} from "./pages/index.js";
import React from 'react';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path={""} element={<MovieList/>}/>
            <Route path={"movie/:id"} element={<MovieList/>}/>
            <Route path={"movies/popular"} element={<MovieList/>}/>
            <Route path={"movies/top"} element={<MovieList/>}/>
            <Route path={"movies/upcoming"} element={<MovieList/>}/>
            <Route path={"search"} element={<Search/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
}

export default AllRoutes;