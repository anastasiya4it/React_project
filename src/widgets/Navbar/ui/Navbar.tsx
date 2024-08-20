import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/className/className";
import * as cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(`${cls.background}`, {}, [className ?? ""])}>
			<div className={classNames(cls.navbar, {}, [""])}>
				{/* //container */}

				<div className={classNames(cls.menu, {}, [])}>
					<AppLink them={AppLinkTheme.secondary} className="" to="/">
						Home
					</AppLink>
					<AppLink them={AppLinkTheme.secondary} className="" to="/about">
						About
					</AppLink>
				</div>
			</div>
		</div>
	);
};

export { Navbar };
