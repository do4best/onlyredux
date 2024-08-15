
import {Cards} from "./Cards.jsx";

import thefetchuse from "../hooks/thefetchuse.jsx";
import PropTypes from "prop-types";
export function MovieList(apiPath) {
const{data:showMovies} = thefetchuse(apiPath)



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
MovieList.propTypes={
    apiPath:PropTypes.any
}
