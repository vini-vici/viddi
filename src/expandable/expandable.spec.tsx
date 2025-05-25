import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import Expandable from './expandable.component';

describe('Expandable', () => {
  it('renders default states', () => {
    render(
      <Expandable header="Testing">
        Should Be Hidden
      </Expandable>
    );
    screen.getByText('Testing');
    expect(screen.queryByText('Should Be Hidden')).toBeNull();
  });

  it('renders default expanded state', () => {
    render(
      <Expandable
        expanded
        header="Testing"
      >
        Should be visible.
      </Expandable>
    );
    screen.getByText('Testing');
    screen.getByText('Should be visible.');
  });

  it('expands/collapses correctly', async () => {
    render(
      <Expandable
        header="Testing Header"
      >
        Testing Content.
      </Expandable>
    );
    expect(await screen.queryByText('Testing Content.')).toBeNull();
    fireEvent.click(await screen.findByText('Testing Header'));
    await screen.findByText('Testing Content.');
    fireEvent.click(await screen.findByText('Testing Header'));
    expect(await screen.queryByText('Testing Content.')).toBeNull();
  });

  it('calls onToggle function when clicked', () => {
    const onToggle = vi.fn();
    const mimic = new CustomEvent('toggle', {
      detail: {
        expanded: true
      }
    });
    render(
      <Expandable
        header="Testing Header"
        onToggle={onToggle}
      >
        Testing Content
      </Expandable>
    );

    fireEvent.click(screen.getByText('Testing Header'));
    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(mimic);
  });

  it('JSX is allowed in the header slot', async () => {
    render(
      <Expandable
        header={
          <div className="custom-header">
            Custom Header
          </div>
        }
      >
        Testing Content.
      </Expandable>
    );
    expect(screen.getByText('Custom Header').classList.contains('custom-header')).toBeTruthy();
  });
});
