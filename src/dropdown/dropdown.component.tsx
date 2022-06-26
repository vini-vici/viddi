import React from 'react';

import Dc from '../classes/domClasses.class';
import useBodyHook from '../classes/useBodyEvent.hook';

import { Icon } from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

export type DropdownItem = {
  label: React.ReactNode;
  id: string;
};

export interface DropdownProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'onSelect'> {
  items?: DropdownItem[];
  label: React.ReactNode;
  onSelect: (e: CustomEvent<{ id: string }>) => void;
}

export default function Dropdown({ items = [], label, onSelect, ...rest }: DropdownProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  const dropdownClasses = new Dc('box-border dropdown-items bg-white hidden absolute left-0 right-0 border rounded-md p-1');

  dropdownClasses.toggle('hidden', !open);
  const dropdown = React.useRef<HTMLDivElement>(null);

  useBodyHook('keydown', e => {
    if (open && e.key === 'Escape')
      setOpen(false);
  }, [open, dropdown.current]);

  useBodyHook('click', e => {
    // If something is clicked on
    const target = e.target as HTMLElement;
    // and the current dropdown target does not contain that target
    if (open && dropdown.current && !dropdown.current.contains(target))
      // close this bitch
      setOpen(false);
  }, [open, dropdown.current]);

  return (
    <div
      {...rest}
      className="inline-block dropdown box-border relative border dark:hover:border-gray-200 border-transparent p-1 hover:border-gray-400 rounded"
      aria-haspopup="listbox"
      ref={dropdown}
    >
      <header className="dropdown-trigger select-none flex" onClick={e => {
        e.stopPropagation();
        setOpen(!open);
      }}>
        <div className="dropdown-trigger:header-label">
          {label}
        </div>
        <div className="dropdown-trigger:status-icon transition-transform ease-linear duration-200" style={{ transform: open ? 'rotate(180deg)' : '' }}>
          <Icon path={mdiMenuDown} size={1} />
        </div>
      </header>
      <div className={dropdownClasses.toString()}>
        {
          items.map(item => (
            <div key={`${item.id}`} className="dropdown-item hover:bg-slate-300" onClick={e => {
              e.preventDefault();
              const event = {
                id: item.id
              };
              const v = new CustomEvent('select', {
                detail: event
              });
              onSelect(v);
              setOpen(false);
            }}>
              {item.label}
            </div>
          ))
        }
      </div>
    </div>
  );
}