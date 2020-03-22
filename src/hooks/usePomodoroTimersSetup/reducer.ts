import {
	/* eslint-disable-next-line no-unused-vars */
	TimeAction,
	SET_WORK_TIME,
	SET_SHORT_BREAK_TIME,
	SET_LONG_BREAK_TIME
} from './actions';

export interface ITimerSetupState {
	workTime: number;
	shortBreakTime: number;
	longBreakTime: number;
}

const timeReducer = (state: ITimerSetupState, action: TimeAction) => {
	switch (action.type) {
		case SET_WORK_TIME:
			return Object.assign({}, state, {
				workTime: action.time
			});
		case SET_SHORT_BREAK_TIME:
			return Object.assign({}, state, {
				shortBreakTime: action.time
			});
		case SET_LONG_BREAK_TIME:
			return Object.assign({}, state, {
				longBreakTime: action.time
			});
		default:
			return state;
	}
};

export default timeReducer;
