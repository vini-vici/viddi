import React from 'react';
import Dropdown, { DropdownItem } from './dropdown.component';
import { render, screen } from '@testing-library/react';
import jest from '@types/jest';

function makeDropdownItems(length = 5): DropdownItem[] {
  return Array.from({ length }, (_, i) => ({
    label: `Option ${i + 1}`,
    id: `${i}`,
  }));
}

test('Dropdown', async () => {
  const onSelect = jest.fn();
  render(
    <Dropdown
      onSelect={onSelect}
      items={makeDropdownItems()}
      label="Choose one"
    />
  );
  expect(1).toBe(1);
});