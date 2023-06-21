import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/createSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

export default store;