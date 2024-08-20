import { classNames } from "shared/lib/className/className";
import * as cls from "./Button.module.scss";
import type { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
	Primary = "primary",
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
			className={classNames(cls.button, {}, [className ?? "", cls[theme]])}
			{...otherprops}
		>
			<div className={classNames(cls.inner)}>{children}</div>
		</button>
	);
};

export { Button };
