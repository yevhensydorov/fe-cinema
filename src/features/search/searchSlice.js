import { createSlice } from "@reduxjs/toolkit";
import { API_KEYS } from "../../constants/constants";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    loading: false,
    movies: [],
  },
  reducers: {
    moviesLoading(state, action) {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    moviesReceived(state, action) {
      if (state.loading === true) {
        state.loading = false;
        state.movies = action.payload;
      }
    },
  },
});

export const { moviesLoading, moviesReceived } = searchSlice.actions;

export const fetchMovies = (movieName) => async (dispatch) => {
  dispatch(moviesLoading());
  const response = await fetch(`${API_KEYS.API_URL}movies/${movieName}`);
  let responseData = await response.json();
  dispatch(moviesReceived(responseData));
};

export default searchSlice.reducer;
