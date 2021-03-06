import * as React from 'react';
import Button from 'components/Button';
import Clock from 'components/Clock';
import useTimer from 'hooks/useTimer';
import usePomodoroTimersSetup from '../../hooks/usePomodoroTimersSetup';
import styles from './styles.module.scss';
import useCarousel from 'hooks/useCarousel';
import TimerSetup from 'components/TimerSetup';
import Totoro, { TotoroState } from 'components/Totoro';

interface ITimerProps {}

const Timer: React.FunctionComponent<ITimerProps> = () => {
	const {
		timerConfiguration,
		onWorkTimeChange,
		onShortBreakTimeChange,
		onLongBreakTimeChange
	} = usePomodoroTimersSetup();

	const { current: initialTime, next, restart } = useCarousel([
		timerConfiguration.workTime,
		timerConfiguration.shortBreakTime,
		timerConfiguration.workTime,
		timerConfiguration.longBreakTime
	]);

	const { currentTime, toggle, reset, isFinished, isOn } = useTimer(
		initialTime
	);

	React.useEffect(() => {
		if (isFinished) {
			next();
			toggle();
		}
	}, [isFinished, next, toggle]);

	const onClick = React.useCallback(
		(e: React.MouseEvent): void => {
			e.preventDefault();
			if (isOn) {
				reset();
				restart();
			} else {
				toggle();
			}
		},
		[toggle, reset, restart, isOn]
	);

	const getTotoroState = React.useCallback(
		(initialTime: number) => {
			switch (initialTime) {
				case timerConfiguration.workTime:
					return TotoroState.Work;
				case timerConfiguration.shortBreakTime:
					return TotoroState.Break;
				case timerConfiguration.longBreakTime:
					return TotoroState.LongBreak;
				default:
					throw new Error('Initial time is not equal any of 3 stages');
			}
		},
		[
			timerConfiguration.longBreakTime,
			timerConfiguration.shortBreakTime,
			timerConfiguration.workTime
		]
	);

	return (
		<div className={styles['timer']}>
			<Clock timeLeft={currentTime} initialTime={initialTime} isRunning={isOn}>
				<Totoro hidden={!isOn} state={getTotoroState(initialTime)} />
			</Clock>
			<TimerSetup
				timerConfiguration={timerConfiguration}
				onWorkTimeChange={onWorkTimeChange}
				onShortBreakTimeChange={onShortBreakTimeChange}
				onLongBreakTimeChange={onLongBreakTimeChange}
				visible={!isOn}
			/>
			<Button className={styles['timer__button']} onClick={onClick}>
				{isOn ? 'RESET' : 'START'}
			</Button>
		</div>
	);
};

export default Timer;
