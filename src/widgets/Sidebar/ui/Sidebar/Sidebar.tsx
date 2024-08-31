import { classNames } from "shared/lib/className/className";
import * as cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSelection } from "widgets/LanguageSelection";
import { TogglSidebar } from "widgets/TogglSidebar";
interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={classNames(cls.sidebar, { [cls.isOpen]: isOpen }, [])}>
      <div className={classNames(cls.btn, {}, [])}>
        <TogglSidebar isOpen={isOpen} onClick={onToggle} />
      </div>
      <div
        className={classNames(cls.toggle, { [cls.toggleNoOpen]: isOpen }, [])}
      >
        <ThemeSwitcher />
        <LanguageSelection />
      </div>
    </div>
  );
};

export { Sidebar };
