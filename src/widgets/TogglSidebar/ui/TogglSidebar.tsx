import { classNames } from "shared/lib/className/className";
import * as cls from "./TogglSidebar.module.scss";
import { Button } from "shared/ui/Button";
import Arrow from "shared/assets/icons/arrow.png";
import type { ButtonHTMLAttributes } from "react";
interface TogglSidebarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isOpen: boolean;
}

const TogglSidebar = (props: TogglSidebarProps) => {
  const { className, isOpen, ...otherprops } = props;

  return (
    <div className={cls.main}>
      <Button className={cls.btn} {...otherprops}>
        <img
          src={Arrow}
          alt="NO"
          className={classNames(cls.icon, { [cls.iconRotate]: isOpen }, [
            className ?? "",
          ])}
        />
      </Button>
    </div>
  );
};

export { TogglSidebar };
