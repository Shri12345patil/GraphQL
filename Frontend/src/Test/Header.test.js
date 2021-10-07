import { render, screen } from '@testing-library/react';
import Header from '../Header'
jest.mock('../Header', () => () => (<div>exact</div>));

describe("App", () => {
test('renders learn react link', () => {
  render(<Header />);
  screen.debug();
});

test('renders', () => {
  const { container } = render(<Header/>);
  expect(container.textContent)
    .toMatch('exact');
});

// it('should render same text passed into title prop', () => {
//     render(<Header title="todo"/>);
//     const h1Element = screen.getByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(<Header/>);
//     const h1Element = screen.getByTitle("Switch")
//     expect(h1Element).toBeInTheDocument();
// });
});