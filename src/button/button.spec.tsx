import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './button.component';

describe('Button', () => {
  it('renders with default styles', () => {
    render(
      <Button>
        Testing
      </Button>
    );
    expect(screen.getByText('Testing').className).toContain('bg-purple-400');
  });

  it('handles onClick events', () => {
    const onClick = vi.fn();
    render(
      <Button
        onClick={onClick}
      >
        Testing
      </Button>
    );
    fireEvent.click(screen.getByText('Testing'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

test('Renders proper variants', async () => {
  const { rerender } = render(
    <Button variant="secondary">
      Testing
    </Button>
  );
  expect(screen.getByText('Testing').className).toContain('bg-gray-400');

  rerender(
    <Button variant="custom" className="custom-text">
      Testing
    </Button>
  );

  expect(screen.getByText('Testing').className).toContain('custom-text');
});