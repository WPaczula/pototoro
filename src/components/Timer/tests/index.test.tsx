import React from 'react';
import { render } from '@testing-library/react';
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
});
