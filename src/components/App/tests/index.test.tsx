import React from 'react';
import { render } from '@testing-library/react';
import App from '..';

test('renders without an error', () => {
  const { baseElement } = render(<App />);

  expect(baseElement).toBeInTheDocument();
});
