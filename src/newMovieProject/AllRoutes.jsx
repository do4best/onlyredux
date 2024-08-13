import {Routes,Route} from "react-router-dom";
import {MovieList,MovieDetails,Search,NotFound} from "./pages/index.js";
import React from 'react';
import * as domain from "node:domain";

function AllRoutes(props) {
    return (
        <main className={"dark:bg-slate-800"}>
        <Routes>
            <Route path={""} element={<MovieList/>}/>
            <Route path={"movie/:id"} element={<MovieList/>}/>
            <Route path={"movies/popular"} element={<MovieList/>}/>
            <Route path={"movies/top"} element={<MovieList/>}/>
            <Route path={"movies/upcoming"} element={<MovieList/>}/>
            <Route path={"search"} element={<Search/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
        </main>
    );
}

export default AllRoutes;