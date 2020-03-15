import * as React from 'react';
import styles from './styles.module.scss';

interface IClockProps {
    timeLeft?: number
    initialTime?: number,
};

const FULL_DASH_ARRAY = 283;

const calculateTimeFraction = (initialTime: number, timeLeft: number): number => {
    const rawTimeFraction = (initialTime - timeLeft) / initialTime;

    return rawTimeFraction;
}

const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 3600 % 60);

    const formattedTime = [minutes, seconds]
        .map((n: number) => n > 9 ? n.toString() : `0${n}`)
        .join(':');

    return formattedTime; 
};

const Clock: React.FunctionComponent<IClockProps> = ({ timeLeft, initialTime }) => {
  const dashArray: number = initialTime && timeLeft
    ? calculateTimeFraction(initialTime, timeLeft) * FULL_DASH_ARRAY
    : 0;

    
  return (
    <div className={styles["clock"]}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g className={styles["clock__circle"]}>
        <circle className={styles["clock__path"]} cx="50" cy="50" r="45"></circle>
        <path
            strokeDasharray={`${dashArray.toFixed(0)} ${FULL_DASH_ARRAY}`}
            className={styles["clock__path-remaining"]}
            data-testid="clock-remaining-time"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
            "
        ></path>
      </g>
    </svg>
    <span className={styles["clock__label"]}>
      {
        timeLeft 
          ? formatTime(timeLeft) 
          : '-'
      }
    </span>
  </div>
  );
};

export default Clock;
