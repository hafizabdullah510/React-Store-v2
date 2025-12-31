import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "../../utils/types";

export const THEME_NAMES = {
  light: "corporate",
  dark: "dim",
} as const;

const themeFromLocalStorage = localStorage.getItem("theme");
const initialState: ThemeState = {
  mode: themeFromLocalStorage === "dark" ? "dark" : "light",
  name: themeFromLocalStorage === "dark" ? THEME_NAMES.dark : THEME_NAMES.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const { activeTheme } = action.payload;
      if (activeTheme === "light") {
        state.mode = "light";
        state.name = THEME_NAMES.light;
      } else if (activeTheme === "dark") {
        state.mode = "dark";
        state.name = THEME_NAMES.dark;
      }
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
