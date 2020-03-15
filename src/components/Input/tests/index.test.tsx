import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '..';

describe('<Input />', () => {
    it('should fire onClick when it is clicked and then lose focus.', () => {
        const inputText = '25';
        const newInputText = '30';
        const onChange = jest.fn();
        const { getByDisplayValue } = render(<Input initialValue={inputText} onChange={onChange} />);
        const input = getByDisplayValue(inputText) as HTMLInputElement;
        const event = { 
            currentTarget: { value: newInputText }, 
            target: { value: newInputText }
        };
        
        fireEvent.change(input, event);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(input.value).toBe(event.currentTarget.value);
    });
});