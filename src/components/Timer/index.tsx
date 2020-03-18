import * as React from 'react';
import Button from 'components/Button';
import Clock from 'components/Clock';
import TimeInput from 'components/Input';
import useTimer from 'hooks/useTimer';
import { minute } from 'utils/constants';
import usePomodoroTimersSetup from './usePomodoroTimersSetup';
import styles from './styles.module.scss';

interface ITimerProps {}

const Timer: React.FunctionComponent<ITimerProps> = () => {
	const {
		state,
		onWorkTimeChange,
		onShortBreakTimeChange,
		onLongBreakTimeChange
	} = usePomodoroTimersSetup();

	const { currentTime, toggle } = useTimer(state.workTime);

	const onClick = React.useCallback(
		(e: React.MouseEvent): void => {
			e.preventDefault();
			toggle();
		},
		[toggle]
	);

	return (
		<div className={styles['timer']}>
			<Clock timeLeft={currentTime} initialTime={state.workTime} />
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
