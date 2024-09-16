import { classNames } from "shared/lib/className/className";
import cls from "./TogglSidebar.module.scss";
import { Button } from "shared/ui/Button";
import Arrow from "shared/assets/icons/arrow.svg";
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
        <Arrow
          className={classNames(cls.icon, { [cls.iconRotate]: isOpen }, [
            className ?? "",
          ])}
        />
      </Button>
    </div>
  );
};

export { TogglSidebar };
