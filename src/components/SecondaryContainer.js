import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {


const movies = useSelector((store) => store.movies);

  return (
  <div className="bg-black max-w-full ">
  
  <div className="relative top-[-12rem] z-20  pl-12 " > 
  <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
  <MovieList title={"Popular"} movies={movies.popularMovies}/>
  <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>

 

    </div>

    </div> 
  )
}

export default SecondaryContainer;