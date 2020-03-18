import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimeInput from '..';

describe('<TimeInput />', () => {
	it('should onChange when input value is changed.', () => {
		const inputValue = 25;
		const newInputValue = 30;
		const onChange = jest.fn();
		const { getByDisplayValue } = render(
			<TimeInput initialValue={inputValue} onChange={onChange} />
		);
		const input = getByDisplayValue(inputValue.toString()) as HTMLInputElement;
		const event = {
			currentTarget: { value: newInputValue.toString() },
			target: { value: newInputValue.toString() }
		};

		fireEvent.change(input, event);

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(input.value).toBe(newInputValue.toString());
	});
});
