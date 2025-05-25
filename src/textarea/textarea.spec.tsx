import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Textarea from './textarea.component';

describe('Textarea', () => {
  it('verifies custom classnames are passed', () => {
    const { container } = render(
      <Textarea
        className="testing"
      />
    );

    expect(container.querySelector('.testing').classList.contains('testing')).toBe(true);
  });

  it('verifies onChange function gets triggered', () => {
    const onChange = vi.fn();
    const { container } = render(
      <Textarea
        onChange={onChange}
      />
    );

    fireEvent.change(
      container.querySelector('textarea'),
      {
        target: {
          value: 'Testing'
        }
      }
    );
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});