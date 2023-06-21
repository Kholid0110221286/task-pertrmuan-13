import { createSlice } from "@reduxjs/toolkit";
import data from "../../../utils/constants/data";

const moviecSlices = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovies(state, action) {
            state.movies.push(action.payload)
        },
    },
});

// generate action dan reducers
const { addMovies } = moviecSlices.actions;
const moviesReducer = moviecSlices.reducer;

export {addMovies};
export default moviesReducer;