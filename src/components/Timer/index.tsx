import * as React from 'react';
import Button from 'components/Button';
import Clock from 'components/Clock';
import TimeInput from 'components/Input';
import useTimer from 'hooks/useTimer';
import { minute } from 'utils/constants';
import usePomodoroTimersSetup from './usePomodoroTimersSetup';
import styles from './styles.module.scss';
import useCarousel from 'hooks/useCarousel';

interface ITimerProps {}

const Timer: React.FunctionComponent<ITimerProps> = () => {
	const {
		state,
		onWorkTimeChange,
		onShortBreakTimeChange,
		onLongBreakTimeChange
	} = usePomodoroTimersSetup();

	const { current: initialTime, next } = useCarousel([
		state.workTime,
		state.shortBreakTime,
		state.workTime,
		state.longBreakTime
	]);
	const { currentTime, toggle, isFinished } = useTimer(initialTime);

	React.useEffect(() => {
		if (isFinished) {
			next();
			toggle();
		}
	}, [isFinished, next, toggle]);

	const onClick = React.useCallback(
		(e: React.MouseEvent): void => {
			e.preventDefault();
			toggle();
		},
		[toggle]
	);

	return (
		<div className={styles['timer']}>
			<Clock timeLeft={currentTime} initialTime={initialTime} />
			<label className={styles['timer__label']}>
				Work [min]
				<TimeInput
					className={styles['timer__input']}
					initialValue={state.workTime / minute}
					onChange={onWorkTimeChange}
				/>
			</label>
			<label className={styles['timer__label']}>
				Short break [min]
				<TimeInput
					className={styles['timer__input']}
					initialValue={state.shortBreakTime / minute}
					onChange={onShortBreakTimeChange}
				/>
			</label>
			<label className={styles['timer__label']}>
				Long break [min]
				<TimeInput
					className={styles['timer__input']}
					initialValue={state.longBreakTime / minute}
					onChange={onLongBreakTimeChange}
				/>
			</label>
			<Button onClick={onClick}>START</Button>
		</div>
	);
};

export default Timer;
