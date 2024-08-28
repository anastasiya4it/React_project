import { Link, type LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/className/className";
import * as cls from "./AppLink.module.scss";
import type { FC } from "react";

export enum AppLinkTheme {
  Primary = "primary",
  Secondary = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  them?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    them = AppLinkTheme.Primary,
    ...otherprops
  } = props;
  return (
    <Link
      className={classNames(cls.link, {}, [className ?? "", cls[them]])}
      to={to}
      {...otherprops}
    >
      {children}
    </Link>
  );
};

export { AppLink };
