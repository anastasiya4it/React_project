import { classNames } from "shared/lib/className/className";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/provider/ThemeProvider/lib/useTheme";
import { Button } from "shared/ui/Button";
import Dark from "shared/assets/icons/dark.svg";
import Light from "shared/assets/icons/light.svg";
import { Theme } from "app/provider/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
  // theme?: Theme;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggeleTheme } = useTheme();

  return (
    <div className={cls.main}>
      <Button onClick={toggeleTheme} className={cls.btn}>
        {theme === Theme.dark ? (
          <Dark className={classNames(cls.icon, {}, [className ?? ""])} />
        ) : (
          <Light className={classNames(cls.icon, {}, [className ?? ""])} />
        )}
      </Button>
    </div>
  );
};

export { ThemeSwitcher };
