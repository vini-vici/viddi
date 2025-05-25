import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Input from './input.component';

test('Testing Placeholders', async () => {
  render(
    <Input placeholder="placeholder"/>
  );
  screen.findByPlaceholderText('placeholder');
});


test('Testing value', async () => {
  render(
    <Input value="testing value" />
  );
  screen.findByDisplayValue('testing value');
});

describe('Input', () => {
  it('changes update correctly', () => {
    const onChange = vi.fn();
    const { container } = render(
      <Input value="testing" onChange={onChange} />
    );
    fireEvent.change(
      container.querySelector('input'),
      {
        target: {
          value: 'Jim'
        }
      }
    );
    expect(onChange).toHaveBeenCalled();
  });

  it('adds custom class name', () => {
    const { container } = render(
      <Input className="custom-class"/>
    );
    expect(container.querySelector('input')?.classList.contains('custom-class')).toBe(true);
  });
});

test('Changes type of rendered input', async () => {
  render(
    <Input type="password" placeholder="Password Placeholder"/>
  );
  screen.getByPlaceholderText('Password Placeholder');
});