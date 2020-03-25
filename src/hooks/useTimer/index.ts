import React from 'react';

export interface ITimerState {
	isFinished: boolean;
	currentTime: number;
	isOn: boolean;
	toggle(): void;
	reset(): void;
}

const second = 1000;

const useTimer = (time: number): ITimerState => {
	const [currentTime, setCurrentTime] = React.useState<number>(time);
	const [isOn, setIsOn] = React.useState<boolean>(false);
	const [isFinished, setIsFinished] = React.useState<boolean>(false);

	React.useEffect(() => {
		setCurrentTime(time);
	}, [time, setCurrentTime]);

	React.useEffect(() => {
		let interval: any;
		if (isOn) {
			interval = setInterval(() => {
				setCurrentTime((t: number): number => t - 1);
			}, second);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isOn, setCurrentTime]);

	React.useEffect(() => {
		if (currentTime === 0) {
			setIsOn(false);
			setIsFinished(true);
		}
	}, [currentTime, setIsOn, setIsFinished]);

	const toggle = React.useCallback(() => {
		if (isFinished) {
			setIsFinished(false);
		}
		setIsOn((o: boolean) => !o);
	}, [isFinished]);

	const reset = React.useCallback(() => {
		setCurrentTime(time);
		setIsOn(false);
		setIsFinished(false);
	}, [setIsOn, setIsFinished, setCurrentTime, time]);

	return {
		isFinished,
		reset,
		toggle,
		currentTime,
		isOn
	};
};

export default useTimer;
