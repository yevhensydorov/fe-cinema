import { createSlice } from "@reduxjs/toolkit";

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
  //Change URL to the local one
  const response = await fetch(`https://api.github.com/users/${movieName}`);
  let responseData = await response.json();
  dispatch(moviesReceived(responseData));
};

export default searchSlice.reducer;
