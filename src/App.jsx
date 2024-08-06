
import Esignature from "./Esignature/Esignature.jsx";
import AgeCounter from "./ageCounter/ageCounter.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import AllRoutes from "./newMovieProject/AllRoutes.jsx";
import {Header} from "./newMovieProject/pages/Header.jsx";
import {Footer} from "./newMovieProject/pages/Footer.jsx";
const App=()=>{
    return(
        <>

     {/*<Esignature/>*/}
     {/*       <AgeCounter/>*/}
            <Header/>

<AllRoutes/>
            <Footer/>
        </>
    )
}
export default App;