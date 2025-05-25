import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loading from './loading.component';

describe('Loading', () => {
  it('shows default loading text', async () => {
    render(<Loading/>);
    expect(await screen.findByText('Loading')).toBeInTheDocument();
  });
});

test('Customize loading text', async () => {
  render(
    <Loading text="custom text"/>
  );
  expect(screen.findByTestId('custom text'));
});

test('Default size', async () => {
  render(
    <Loading/>
  );
  expect(
    document.querySelector('svg').style.width
  ).toBe('1.5rem');
});

test('Custom Sizes', async () => {
  const { container, rerender } = render(
    <Loading size={2} />
  );
  expect(document.querySelector('svg').style.width).toBe('3rem');
  rerender(
    <Loading
      size={3}
    />
  );

  expect(container.querySelector('svg').style.width)
    .toBe('4.5rem');

});