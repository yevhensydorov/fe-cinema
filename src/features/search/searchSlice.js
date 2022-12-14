import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEYS } from "../../constants/constants";


export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    loading: false,
    movies: [],
    isError: false,
  },
  reducers: {
    moviesLoading(state, _action) {
      if (!state.loading) {
        state.loading = true;
      }
    },
    moviesReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.movies = action.payload;
      }
    },
    isFetchError(state, _action) {
      if (!state.isError) {
        state.isError = true;
      }
    },
  },
});

export const { moviesLoading, moviesReceived, isFetchError } = searchSlice.actions;

export const fetchMovies = (movieName) => async (dispatch) => {
  dispatch(moviesLoading());

  const result = await axios(`${API_KEYS.API_URL}movies/search/${movieName}`).catch(err => isFetchError(err));

  dispatch(moviesReceived(result.data));
};

export default searchSlice.reducer;
