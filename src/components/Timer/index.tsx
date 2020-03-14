import * as React from 'react';
import Button from '../Button';
import Clock from '../Clock';
import useTimer from '../../hooks/useTimer';
import styles from './styles.module.scss';

interface ITimerProps {
  initialTime?: number;
}

const Timer: React.FunctionComponent<ITimerProps> = ({ initialTime = 5 }) => {
  const { currentTime, toggle } = useTimer(initialTime);

  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toggle();
  }, [toggle]);

  return (
    <div className={styles['timer']}>
      <Clock timeLeft={currentTime} initialTime={initialTime} />
      <Button onClick={onClick}>START</Button>
    </div>
  );
};

export default Timer;
