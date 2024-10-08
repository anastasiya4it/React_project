import { Link, type LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/className/className";
import cls from "./AppLink.module.scss";
import type { FC } from "react";

export enum AppLinkTheme {
  Primary = "primary",
  Secondary = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.Primary,
    ...otherprops
  } = props;
  return (
    <Link
      className={classNames(cls.link, {}, [className ?? "", cls[theme]])}
      to={to}
      {...otherprops}
    >
      {children}
    </Link>
  );
};

export { AppLink };
