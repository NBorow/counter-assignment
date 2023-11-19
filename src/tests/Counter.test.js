import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'

describe('Counter', () => {
  test('renders counter message', () => {
    render(<Counter />);
    const messageElement = screen.getByText(/counter/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders initial count value of 0', () => { 
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
  });

  test('increments count by 1 when + button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('1');
  });

  test('decrements count by 1 when - button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId('count');
    // Assuming the count starts at 0, after one decrement it should display '-1'.
    expect(countElement).toHaveTextContent('-1');
  });
});
