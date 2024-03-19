import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BLOODBANK title', () => {
  render(<App />);
  const titleElement = screen.getByText(/BLOODBANK/i);
  expect(titleElement).toBeInTheDocument();
});
