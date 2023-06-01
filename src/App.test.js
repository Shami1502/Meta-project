
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './Main';

test('renders the BookingForm heading', () => {
  render(<Main />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('validates HTML5 input attributes', () => {
  render(<Main />);
  const dateInput = screen.getByLabelText('Date');
  const timeInput = screen.getByLabelText('Time');
  const guestsInput = screen.getByLabelText('Number of guests');

  expect(dateInput).toHaveAttribute('required');
  expect(timeInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('validates JavaScript validation functions', () => {
  render(<Main />);
  const guestsInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInput, { target: { value: '0' } });
  const errorElement = screen.getByText('Number of guests must be at least 1');
  expect(errorElement).toBeInTheDocument();

  fireEvent.change(guestsInput, { target: { value: '11' } });
  const errorElement2 = screen.getByText('Number of guests cannot exceed 10');
  expect(errorElement2).toBeInTheDocument();
});