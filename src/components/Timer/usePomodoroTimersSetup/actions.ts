export const SET_WORK_TIME = 'SET_WORK_TIME';
export const SET_SHORT_BREAK_TIME = 'SET_SHORT_BREAK_TIME';
export const SET_LONG_BREAK_TIME = 'SET_LONG_BREAK_TIME';

export interface TimeAction {
	type: string;
	time: number;
}
