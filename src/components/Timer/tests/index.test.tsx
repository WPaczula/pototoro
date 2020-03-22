import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Timer from '..';

describe('<Timer />', () => {
	it('should have initial state.', () => {
		const initialWorkMinutes = 50;
		const initialShortBreakMinutes = 10;
		const initialLongBreakMinutes = 30;
		const { getByDisplayValue } = render(<Timer />);

		const minutesInput = getByDisplayValue(
			initialWorkMinutes.toString()
		) as HTMLInputElement;
		const shortBreakInput = getByDisplayValue(
			initialShortBreakMinutes.toString()
		) as HTMLInputElement;
		const longBreakInput = getByDisplayValue(
			initialLongBreakMinutes.toString()
		) as HTMLInputElement;

		expect(minutesInput).toBeInTheDocument();
		expect(shortBreakInput).toBeInTheDocument();
		expect(longBreakInput).toBeInTheDocument();
	});

	it('should change work time if user changes config.', () => {
		const newWorkTime = 20;
		const { getByTestId } = render(<Timer />);
		const input = getByTestId('work-time-input');
		const clockTime = getByTestId('clock-label');

		act(() => {
			fireEvent.change(input, { target: { value: newWorkTime } });
		});

		expect(clockTime.textContent).toBe(`${newWorkTime}:00`);
	});

	it('should reset to initial state after reset button is clicked.', () => {
		// Arrange
		const { getByText, getByTestId } = render(<Timer />);
		const clock = getByTestId('clock-label');
		const startButton = getByText('START');

		act(() => {
			startButton.click();
			jest.advanceTimersByTime(5000);
		});

		// Act
		const resetButton = getByText('RESET');
		act(() => {
			resetButton.click();
		});

		// Assert
		expect(clock.textContent).toBe('50:00');
	});
});
