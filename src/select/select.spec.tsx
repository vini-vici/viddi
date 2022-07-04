import React from 'react';

import { render } from '@testing-library/react';

import Select from './select.component';

describe('Something something', () => {
  it('Should render correctly', async () => {
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn()
    }));
    render(
      <Select
        selectedItems={[]}
        items={[
          {
            label: 'Label 1',
            value: 1
          }
        ]}
        onChange={jest.fn()}
      />
    );
  });
});