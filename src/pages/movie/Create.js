import AddMovieForm from "../../components/form/AddMovieForm/AddMovieForm";
import Hero from "../../components/hero/Hero";
function CreateMovie({movies, setMovies}){
    return(
        <div>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies} />
            <h2>Create Movie</h2>
        </div>
    )
}

export default CreateMovie;