import Movie from "../movie/Movie";
import store from "../store";
import styles from "./Movies.module.css"
import {nanoid} from "nanoid";
import { useSelector } from "react-redux";

function Movies(props){
    const {title} = props;
    

    //membuat function handleevent
    
    const movies = useSelector((store) => store.movies.movies);

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                {/**
                 * Looping Movie Map. 
                 * Render Component Movie.
                 * Kirim Props Movie.*/}
                {movies.map(function(movie){
                    return <Movie key={movie.id} movie={movie} />
                })
                }
                {}
                </div>
            </section>
        </div>
    )
}

export default Movies;