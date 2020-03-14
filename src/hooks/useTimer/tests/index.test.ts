import { renderHook, act } from '@testing-library/react-hooks'
import useTimer from '..';

jest.useFakeTimers();

describe('useTimer', () => {
    it('should have initial state.', () => {
        const time = 500;

        const { result } = renderHook(() => useTimer(time))

        expect(result.current.currentTime).toBe(time);
    });

    it('should decrese time after it is started.', () => {
        const time = 3000;
        const elapsedTime = 1000;
        const { result } = renderHook(() => useTimer(time));

        act(() => {
            result.current.toggle();
            jest.advanceTimersByTime(elapsedTime);
        });

        expect(result.current.currentTime).toBe(time - elapsedTime);
    });

    it('should not decrese time if it is not turned on.', () => {
        const time = 3000;
        const elapsedTime = 1000;
        const { result } = renderHook(() => useTimer(time));

        act(() => {
            jest.advanceTimersByTime(elapsedTime);
        });

        expect(result.current.currentTime).toBe(time);
    });

    it('should show that the timer is finished and stop it after the time elapsed.', () => {
        const time = 1000;
        const elapsedTime = 5000;
        const { result } = renderHook(() => useTimer(time));

        act(() => {
            result.current.toggle();
            jest.advanceTimersByTime(elapsedTime);
        });

        expect(result.current.currentTime).toBe(0);
        expect(result.current.isFinished).toBe(true);
    })
});
