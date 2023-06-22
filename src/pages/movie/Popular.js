import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies"
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovie } from "../../components/features/createSlice";
import { useDispatch } from "react-redux";

function PopularMovie(){
    //membuat state movies

    const dispatch = useDispatch();
    useEffect(() =>{
        getPopularMovies();
    },[])

    async function getPopularMovies(){
         //fecth data dengan axios
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;
        dispatch(updateMovie(movies));

        //simpan data ke state movie
    }

    return(
        <div>
            <Hero />
            <Movies title="Popular Movies" />
        </div>
    )
}

export default PopularMovie;