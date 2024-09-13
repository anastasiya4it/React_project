import { classNames } from "shared/lib/className/className";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/provider/ThemeProvider/lib/useTheme";
import { Button } from "shared/ui/Button";
import Darc from "shared/assets/icons/dark.png";
import Light from "shared/assets/icons/light.png";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggeleTheme } = useTheme();

  return (
    <div className={cls.main}>
      <Button onClick={toggeleTheme} className={cls.btn}>
        <img
          src={theme === "dark" ? Darc : Light}
          alt="NO"
          className={classNames(cls.icon, {}, [className ?? ""])}
        />
      </Button>
    </div>
  );
};

export { ThemeSwitcher };
