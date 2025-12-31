import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGridView: true,
  page: 1,
};

export const productsSlice = createSlice({
  name: "productsView",
  initialState,
  reducers: {
    setGridView: (state) => {
      state.isGridView = true;
    },
    setListView: (state) => {
      state.isGridView = false;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { setGridView, setListView, setPage, resetPage } =
  productsSlice.actions;
export default productsSlice.reducer;
