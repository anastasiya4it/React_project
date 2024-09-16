import { createContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export type Props = {
  children?: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({});
