import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
test('renders learn react link', () => {
  render(<App />);
  screen.debug();
});

test('renders App component', () => {
  render(<App />);
  screen.getByText('Login');
  expect(screen.getByText('Login')).toBeInTheDocument;
});

test('renders App component', () => {
  render(<App />);

  expect(screen.getByRole('group')).toBeInTheDocument;
});
});
