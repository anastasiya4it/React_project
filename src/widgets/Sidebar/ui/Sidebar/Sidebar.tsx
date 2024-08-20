import { classNames } from "shared/lib/className/className";
import * as cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSelection } from "shared/ui/LanguageSelection";
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
			<button
				type="button"
				onClick={onToggle}
				className={classNames(cls.btn, {}, [])}
			>
				toggle
			</button>
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
