import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Login', () => {
  it('should go to Login page', () => {
    render(<App />);
    const response = screen.getByText(/login/i)
    expect(response).toBeInTheDocument();
  });
})
