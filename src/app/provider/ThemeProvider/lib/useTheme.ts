import React, { FunctionComponent, useContext, useMemo, useState } from "react";
import { Theme, ThemeContext, Props } from "./ThemeContext";

interface UseThemeResult {
  toggeleTheme: () => void;
  theme: Theme;
}
const localStorTheme =
  (localStorage.getItem("LOCAL_STORAGE_THEME") as Theme) || Theme.light;

export function useTheme(): UseThemeResult {
  const { theme = Theme.light, setTheme } = useContext(ThemeContext);

  const toggeleTheme = () => {
    if (setTheme) {
      setTheme(theme === Theme.light ? Theme.dark : Theme.light);
      localStorage.setItem("LOCAL_STORAGE_THEME", theme);
    }
  };
  return { theme, toggeleTheme };
}
