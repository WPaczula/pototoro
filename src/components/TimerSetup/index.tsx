import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { IPomodoroSetup } from 'hooks/usePomodoroTimersSetup';
import TimeInput from 'components/Input';
import { minute } from 'utils/constants';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface ITimerSetupProps extends IPomodoroSetup {
	visible?: boolean;
}

const TimerSetup: React.FunctionComponent<ITimerSetupProps> = ({
	timerConfiguration,
	onWorkTimeChange,
	onShortBreakTimeChange,
	onLongBreakTimeChange,
	visible = true
}) => {
	return (
		<div
			className={classNames(styles['timer-setup'], {
				[styles['timer-setup--disappearing']]: !visible
			})}
		>
			<label className={styles['timer-setup__label']}>
				Work [min]
				<TimeInput
					data-testid="work-time-input"
					className={styles['timer__input']}
					initialValue={timerConfiguration.workTime / minute}
					onChange={onWorkTimeChange}
				/>
			</label>
			<label className={styles['timer-setup__label']}>
				Short break [min]
				<TimeInput
					data-testid="short-break-time-input"
					className={styles['timer__input']}
					initialValue={timerConfiguration.shortBreakTime / minute}
					onChange={onShortBreakTimeChange}
				/>
			</label>
			<label className={styles['timer-setup__label']}>
				Long break [min]
				<TimeInput
					data-testid="long-break-time-input"
					className={styles['timer__input']}
					initialValue={timerConfiguration.longBreakTime / minute}
					onChange={onLongBreakTimeChange}
				/>
			</label>
		</div>
	);
};

export default TimerSetup;
