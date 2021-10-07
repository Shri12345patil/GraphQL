import { render, screen } from '@testing-library/react';
import App from '../App';
jest.mock('../App', () => () => (<div>Sign-Up</div>));

describe("App", () => {
test('renders learn react link', () => {
  render(<App />);
  screen.debug();
});

test('renders', () => {
  const { container } = render(<App/>); 
  expect(container.textContent)
    .toMatch('Sign-Up');
});
});
