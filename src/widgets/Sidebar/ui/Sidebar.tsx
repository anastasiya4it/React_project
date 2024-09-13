import { classNames } from "shared/lib/className/className";
import cls from "./Sidebar.module.scss";
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
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.isOpen]: isOpen }, [])}
    >
      <div className={classNames(cls.btn, {}, [])}>
        <TogglSidebar data-testid="toggle" isOpen={isOpen} onClick={onToggle} />
      </div>
      <div
        data-testid="menu-footer"
        className={classNames(cls.toggle, { [cls.toggleNoOpen]: isOpen }, [])}
      >
        <ThemeSwitcher />
        <LanguageSelection />
      </div>
    </div>
  );
};

export { Sidebar };
