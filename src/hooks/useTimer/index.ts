import React from 'react';

export interface ITimerState {
    isFinished: boolean,
    currentTime: number,
    toggle: () => void,
};

const second = 1000;

const useTimer = (time: number): ITimerState => {
    const [currentTime, setCurrentTime] = React.useState<number>(time);
    const [isOn, setIsOn] = React.useState<boolean>(false);
    const [isFinished, setIsFinished] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (isOn) {
            const interval = setInterval(() => {
                setCurrentTime((t: number): number => t - second);
            }, second)

            return () => { 
                clearInterval(interval) 
            }
        }
    }, [isOn, setCurrentTime]);

    React.useEffect(() => {
        if (currentTime === 0) {
            setIsOn(false);
            setIsFinished(true);
        }
    }, [currentTime, setIsOn, setIsFinished])

    const toggle = React.useCallback(
        () => setIsOn((o: boolean) => !o), 
        []
    );

    return {
        isFinished,
        toggle,
        currentTime
    };
};

export default useTimer;