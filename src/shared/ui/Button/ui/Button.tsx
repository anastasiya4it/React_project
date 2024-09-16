import { classNames } from "shared/lib/className/className";
import cls from "./Button.module.scss";
import type { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  Primary = "primary",
  Clear = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.Primary,
    ...otherprops
  } = props;
  return (
    <button
      role="button"
      className={classNames(cls.button, { [cls[theme]]: true }, [
        className ?? "",
      ])}
      {...otherprops}
    >
      <div className={classNames(cls.inner)}>{children}</div>
    </button>
  );
};

export { Button };
