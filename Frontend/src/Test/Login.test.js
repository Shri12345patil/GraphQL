import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe("App", () => {
test('renders learn react link', () => {
  render(<Login />);
  screen.debug();
});
});
