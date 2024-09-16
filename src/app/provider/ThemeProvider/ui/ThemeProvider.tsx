import React, {
  type FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";
import { Theme, ThemeContext, type Props } from "../lib/ThemeContext";
import { classNames } from "shared/lib/className/className";
import "../../../styles/index.scss";

const localStorTheme =
  (localStorage.getItem("LOCAL_STORAGE_THEME") as Theme) || Theme.Light;

const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorTheme);
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      <div className={classNames("app", {}, [theme])}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
