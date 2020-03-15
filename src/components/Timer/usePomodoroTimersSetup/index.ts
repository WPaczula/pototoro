import * as React from 'react';
import timeReducer, { ITimerSetupState } from './reducer';
import { 
  SET_WORK_TIME, 
  SET_SHORT_BREAK_TIME,
  SET_LONG_BREAK_TIME
} from './actions';
import { minute } from '../../../utils/constants';

interface IPomodoroSetup {
    state: ITimerSetupState,
    onWorkTimeChange: (e: React.FormEvent<HTMLInputElement>) => void,
    onShortBreakTimeChange: (e: React.FormEvent<HTMLInputElement>) => void,
    onLongBreakTimeChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const initialState: ITimerSetupState = { 
  workTime: 50 * minute, 
  longBreakTime: 30 * minute, 
  shortBreakTime: 10 * minute
};

const toMinute = (inputValue: string) => {
  if (inputValue === '') {
    return 0;
  }

  return Number(inputValue) * minute;
}

const usePomodoroTimersSetup = (): IPomodoroSetup => {
    const [state, dispatch] = React.useReducer(timeReducer, initialState);
    
    const onWorkTimeChange = React.useCallback((e: React.FormEvent<HTMLInputElement>): void => {
      dispatch({ type: SET_WORK_TIME, time: toMinute(e.currentTarget.value) });
    }, []);
    
    const onShortBreakTimeChange = React.useCallback((e: React.FormEvent<HTMLInputElement>): void => {
      dispatch({ type: SET_SHORT_BREAK_TIME, time: toMinute(e.currentTarget.value) });
    }, []);
    
    const onLongBreakTimeChange = React.useCallback((e: React.FormEvent<HTMLInputElement>): void => {
      dispatch({ type: SET_LONG_BREAK_TIME, time: toMinute(e.currentTarget.value) });
    }, []);
  
    return {
        state,
        onWorkTimeChange,
        onShortBreakTimeChange,
        onLongBreakTimeChange,
    }
  }

export default usePomodoroTimersSetup;