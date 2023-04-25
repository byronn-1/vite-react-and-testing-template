import { render, screen } from '@testing-library/react';
import { TestComponent } from './TestComponent';

describe('TestComponent', () => {
    it('renders the button with correct text', () => {
      render(<TestComponent />);
      const buttonElement = screen.getByText(/Vitest/i);
      expect(buttonElement).toBeInTheDocument();
    });
});