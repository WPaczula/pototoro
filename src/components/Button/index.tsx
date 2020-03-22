import * as React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IButtonProps {
	children: React.ReactNode;
	onClick(event: React.MouseEvent): void;
	className?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
	children,
	onClick,
	className
}) => {
	const ref = React.useRef<HTMLButtonElement>(null);

	const localOnClick = (e: React.MouseEvent) => {
		onClick(e);
		ref.current?.blur();
	};

	return (
		<button
			onClick={localOnClick}
			className={classNames(styles['button'], className)}
			ref={ref}
		>
			{children}
		</button>
	);
};

export default Button;
