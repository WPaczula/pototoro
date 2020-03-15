import * as React from 'react';
import Button from '../Button';
import Clock from '../Clock';
import Input from '../Input';
import useTimer from '../../hooks/useTimer';
import styles from './styles.module.scss';

interface ITimerProps {
  initialTime?: number;
}

const Timer: React.FunctionComponent<ITimerProps> = ({ initialTime = 0 }) => {
  const { currentTime, toggle } = useTimer(initialTime);

  const onClick = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    toggle();
  }, [toggle]);

  const onChange = React.useCallback((e: React.FormEvent<HTMLInputElement>): void => {

  }, [])

  return (
    <div className={styles['timer']}>
      <Clock timeLeft={currentTime} initialTime={initialTime} />
      <label className={styles['timer__label']}>
        Work [min]
        <Input className={styles['timer__input']} onChange={onChange} />
      </label>
      <label className={styles['timer__label']}>
        Short break [min]
        <Input className={styles['timer__input']} onChange={onChange} />
      </label>
      <label className={styles['timer__label']}>
        Long break [min]
        <Input className={styles['timer__input']} onChange={onChange} />
      </label>
      <Button onClick={onClick}>START</Button>
    </div>
  );
};

export default Timer;
