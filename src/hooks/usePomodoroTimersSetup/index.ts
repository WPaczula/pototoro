import * as React from 'react';
/* eslint-disable-next-line no-unused-vars */
import timeReducer, { ITimerSetupState } from './reducer';
import {
	SET_WORK_TIME,
	SET_SHORT_BREAK_TIME,
	SET_LONG_BREAK_TIME
} from './actions';
import { minute } from 'utils/constants';

export interface IPomodoroSetup {
	timerConfiguration: ITimerSetupState;
	onWorkTimeChange: (minutes: number) => void;
	onShortBreakTimeChange: (minutes: number) => void;
	onLongBreakTimeChange: (minutes: number) => void;
}

const initialState: ITimerSetupState = {
	workTime: 50 * minute,
	longBreakTime: 30 * minute,
	shortBreakTime: 10 * minute
};

const usePomodoroTimersSetup = (): IPomodoroSetup => {
	const [state, dispatch] = React.useReducer(timeReducer, initialState);

	const onWorkTimeChange = React.useCallback((minutes: number): void => {
		dispatch({ type: SET_WORK_TIME, time: minutes * minute });
	}, []);

	const onShortBreakTimeChange = React.useCallback((minutes: number): void => {
		dispatch({ type: SET_SHORT_BREAK_TIME, time: minutes * minute });
	}, []);

	const onLongBreakTimeChange = React.useCallback((minutes: number): void => {
		dispatch({ type: SET_LONG_BREAK_TIME, time: minutes * minute });
	}, []);

	return {
		timerConfiguration: state,
		onWorkTimeChange,
		onShortBreakTimeChange,
		onLongBreakTimeChange
	};
};

export default usePomodoroTimersSetup;
