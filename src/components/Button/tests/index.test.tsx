import React from 'react';
import { render } from '@testing-library/react';
import Button from '..';

describe('<Button />', () => {
    it('should fire onClick when it is clicked and then lose focus.', () => {
        const buttonText = 'Button';
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>{buttonText}</Button>);
        const button = getByText(buttonText);

        button.click();

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(document.activeElement).not.toBe(button);
    });
});