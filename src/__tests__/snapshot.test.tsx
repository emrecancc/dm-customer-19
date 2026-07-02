import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('Dashboard renders correctly', () => {
  const dateNowSpy = jest.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-14T00:00:00Z').getTime());
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
  dateNowSpy.mockRestore();
});