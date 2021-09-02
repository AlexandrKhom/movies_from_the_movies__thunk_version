import {SET_LOADING, SET_MOVIES_DATA } from "../action-types";
import queryString from "query-string";
import {getGenres, getMovies, getMoviesBySearchValue} from "../../services";
import {setGenres} from "./genres";

export const setMovies = (search, genres) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const parsed = queryString.parse(search);
        let movies;

        parsed.query
            ? movies = await getMoviesBySearchValue(search) || {}
            : movies = await getMovies(parsed);

        dispatch({type: SET_MOVIES_DATA, payload: movies});

        if (!genres) {
            const genres = await getGenres();
            dispatch(setGenres(genres));
        }
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setLoading(false));
    }
};

export const setLoading = (value) => ({type: SET_LOADING, payload:value});
