import React from 'react';
import { render } from '@testing-library/react';
import Clock from '..';

describe('<Clock />', () => {
	it('should have half of the remaining path when remaining time is half of the initial one.', () => {
		const initialTime = 10;
		const timeLeft = 5;
		const { getByTestId } = render(
			<Clock initialTime={initialTime} timeLeft={timeLeft} />
		);

		const path = getByTestId('clock-remaining-time');

		expect(path.getAttribute('stroke-dasharray')).toBe('142 283');
	});

	it('should display formatted seconds.', () => {
		const minutes = 10;
		const seconds = 15;
		const totalSeconds = seconds + minutes * 60;
		const { getByTestId } = render(
			<Clock initialTime={totalSeconds} timeLeft={totalSeconds} />
		);

		const label = getByTestId('clock-label');

		expect(label.textContent).toBe('10:15');
	});

	it('should display one hour at max.', () => {
		const hour = 60 * 60;
		const { getByTestId } = render(
			<Clock initialTime={hour} timeLeft={hour} />
		);

		const label = getByTestId('clock-label');

		expect(label.textContent).toBe('01:00:00');
	});
});
