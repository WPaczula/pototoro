import * as React from 'react';
import Button from '../Button';
import Clock from '../Clock';
import Input from '../Input';
import useTimer from '../../hooks/useTimer';
import styles from './styles.module.scss';
import usePomodoroTimersSetup from './usePomodoroTimersSetup';
import { minute } from '../../utils/constants';

interface ITimerProps {
}

const Timer: React.FunctionComponent<ITimerProps> = () => {
  const { 
    state, 
    onWorkTimeChange, 
    onShortBreakTimeChange, 
    onLongBreakTimeChange
  } = usePomodoroTimersSetup();
  
  const { currentTime, toggle } = useTimer(state.workTime);

  const onClick = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    toggle();
  }, [toggle]);

  return (
    <div className={styles['timer']}>
      <Clock timeLeft={currentTime} initialTime={state.workTime} />
      <label className={styles['timer__label']}>
        Work [min]
        <Input 
          className={styles['timer__input']} 
          initialValue={(state.workTime / minute).toString()} 
          onChange={onWorkTimeChange} 
        />
      </label>
      <label className={styles['timer__label']}>
        Short break [min]
        <Input 
          className={styles['timer__input']} 
          initialValue={(state.shortBreakTime / minute).toString()} 
          onChange={onShortBreakTimeChange} 
        />
      </label>
      <label className={styles['timer__label']}>
        Long break [min]
        <Input 
          className={styles['timer__input']} 
          initialValue={(state.longBreakTime / minute).toString()} 
          onChange={onLongBreakTimeChange} 
        />
      </label>
      <Button onClick={onClick}>START</Button>
    </div>
  );
};

export default Timer;
