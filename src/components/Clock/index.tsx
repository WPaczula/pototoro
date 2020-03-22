import * as React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IClockProps {
	timeLeft?: number;
	initialTime?: number;
	isRunning: boolean;
	children?: React.ReactChild;
}

const FULL_DASH_ARRAY = 283;

const calculateTimeFraction = (
	initialTime: number,
	timeLeft: number
): number => {
	const rawTimeFraction = (initialTime - timeLeft) / initialTime;

	return rawTimeFraction;
};

const formatTime = (totalSeconds: number): string => {
	const hours: number = Math.floor(totalSeconds / 3600);
	const minutes: number = Math.floor(totalSeconds / 60) - hours * 60;
	const seconds: number = Math.floor(totalSeconds % 60);

	const formattedTime = [hours, minutes, seconds]
		.filter((time, i) => !(i === 0 && time === 0))
		.map((n: number) => (n > 9 ? n.toString() : `0${n}`))
		.join(':');

	return formattedTime;
};

const Clock: React.FunctionComponent<IClockProps> = ({
	timeLeft,
	initialTime,
	isRunning,
	children
}) => {
	const dashArray: number =
		initialTime && timeLeft
			? calculateTimeFraction(initialTime, timeLeft) * FULL_DASH_ARRAY
			: 0;

	return (
		<div
			className={classNames(styles['clock'], {
				[styles['clock--running']]: isRunning
			})}
		>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<g className={styles['clock__circle']}>
					<circle
						className={classNames(styles['clock__path'], {
							[styles['clock__path--thin']]: isRunning
						})}
						cx="50"
						cy="50"
						r="45"
					></circle>
					<path
						strokeDasharray={`${dashArray.toFixed(0)} ${FULL_DASH_ARRAY}`}
						className={classNames(styles['clock__path-remaining'], {
							[styles['clock__path-remaining--thin']]: isRunning
						})}
						data-testid="clock-remaining-time"
						d="
							M 50, 50
							m -45, 0
							a 45,45 0 1,0 90,0
							a 45,45 0 1,0 -90,0
							"
					></path>
				</g>
			</svg>
			{children}
			<span
				className={classNames(styles['clock__label'], {
					[styles['clock__label--bottom']]: isRunning
				})}
				data-testid="clock-label"
			>
				{timeLeft ? formatTime(timeLeft) : '-'}
			</span>
		</div>
	);
};

export default Clock;
