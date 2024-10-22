import { createSlice } from "@reduxjs/toolkit";

interface FavouritesState {
  ids: string[];
}

const initialState: FavouritesState = {
  ids: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  // i reducers sono funzioni usate per cambiare lo stato
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;

export default favouritesSlice.reducer;
