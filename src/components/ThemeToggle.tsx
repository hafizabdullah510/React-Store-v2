import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { toggleTheme } from "../features/theme/themeSlice";
import type { ThemeState } from "../utils/types";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { mode, name } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", name);
  }, [name]);
  const handleThemeToggle = (theme: ThemeState["mode"]) => {
    dispatch(toggleTheme({ activeTheme: theme }));
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleThemeToggle(mode === "light" ? "dark" : "light");
      }}
      className="rounded-full hover:bg-base-300 p-2 duration-200 cursor-pointer"
    >
      {mode === "dark" ? (
        <MdLightMode size={24} className="cursor-pointer text-base-content" />
      ) : (
        <MdDarkMode size={24} className="cursor-pointer text-base-content" />
      )}
    </div>
  );
};
export default ThemeToggle;
