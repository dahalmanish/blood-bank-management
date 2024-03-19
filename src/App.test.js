import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders BLOODBANK title', () => {
  render(<App />);
  const titleElement = screen.getByText(/BLOODBANK/i);
  expect(titleElement).toBeInTheDocument();
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> fc9be08503aed6925dec2452606b28fc0c9f2f82
});
