import React, { HTMLProps, useEffect } from 'react';
import { mdiChevronDown, mdiChevronUp, mdiConsoleNetworkOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import useBodyEvent from '../classes/useBodyEvent.hook';
import Dc from '../classes/domClasses.class';
import Input from '../input/input.component';
import css from './select.module.css';
import Button from '../button/button.component';

export interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, 'onChange'> {
  items: SelectItem[];
  selectedItems: SelectItem[];
  selectMode?: 'single' | 'multi';
  placeholder?: string;
  onChange: (e: CustomEvent<{ selectedItems: SelectItem[] }>) => void;
  filter?: boolean;
  filterPlaceholder?: string;
  onFilter?: (t: string, items: SelectItem[]) => SelectItem[];
  viewportEl?: HTMLElement;
}

export interface SelectItem {
  label: string;
  value: unknown;
}

export default function Select({
  id,
  items,
  filter = false,
  filterPlaceholder = 'Filter items',
  selectedItems = [],
  selectMode = 'single',
  onChange,
  className = '',
  placeholder = 'Select an option...',
}: SelectProps): React.ReactElement {

  const [open, setOpen] = React.useState(false);
  const [filteredItems, setFilteredItems] = React.useState([...items]);
  const [isTop, setIsTop] = React.useState(true);
  const [multiSelectMap, setMultiSelectMap] = React.useState<Record<any, SelectItem>>({});
  const selectRef = React.useRef<HTMLDivElement>(null);

  // Part 1: Listen to body events.

  useBodyEvent('click', e => {
    if (open && selectRef.current && e.target && !selectRef.current.contains(e.target as HTMLElement))
      setOpen(false);
  }, [open]);

  useBodyEvent('keydown', e => {
    if (open && e.key === 'Escape')
      setOpen(false);
  }, [open]);

  // Part 2: Intersection observers

  const [bounds, setBounds] = React.useState({ height: 0 });

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.rootBounds) {

        const { height: intersectionHeight } = entry.intersectionRect;
        const { top: elTop } = entry.boundingClientRect;
        const { top: rootTop } = entry.rootBounds;

        if (intersectionHeight < (elTop - rootTop))
          setIsTop(false);
      }

      setBounds({
        height: entry.intersectionRect.height
      });

    }, {
      threshold: 0,
      root: null,
      rootMargin: '0%'
    });

    // Add observer in
    if (selectRef.current)
      observer.observe(selectRef.current);

    // Remove the observer
    return () => observer.disconnect();

  }, [selectRef]);

  return (
    <div
      id={id}
      className={new Dc('select md:px-3 px-1 relative border rounded-md bg-white', className).toString()}
    >
      <header
        className="select:header flex justify-between p-1"
        onClick={e => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <div className="select:header-placeholder overflow-hidden whitespace-nowrap text-ellipsis">
          {selectedItems.map(i => i.label).join(', ') || placeholder}
        </div>
        <div>
          <Icon path={mdiChevronDown} size={1} />
        </div>
      </header>
      <section
        ref={selectRef}
        onKeyDown={e => console.info(e)}
        style={{
          maxHeight: bounds.height == 0 ? undefined : bounds.height + 'px'
        }}
        className={
          new Dc(
            'select-dropdown flex-grow absolute left-0 right-0 p-1 bg-white dark:bg-gray-8000 border rounded flex flex-col',
            css.dropdownItemsContainer,
            { [css.bottom]: !isTop },
            { hidden: !open }
          )
            .toString()
        }
      >
        {/* Filter */}
        <header className={new Dc({ hidden: !filter }).toString()}>
          {
            filter &&
            <Input
              className="w-full"
              placeholder={filterPlaceholder}
              onChange={e => setFilteredItems(items.filter(i => i.label.toLowerCase().includes(e.target.value.toLowerCase())))}
            />
          }
        </header>
        {/* Options wrapper for overlfow */}
        <div className="wrapper flex-grow overflow-auto">
          {
            filteredItems.length &&
            filteredItems.map(option => (
              <div
                key={`select-option-${option.value}`}
                className={new Dc(css.dropdownItem, 'flex gap-2').toString()}
                data-label={option.label}
                data-value={option.value}
                onClick={e => {
                  // Stop propagation
                  e.stopPropagation();

                  // If we are in single mode.
                  // Throw the change event
                  if (selectMode === 'single') {

                    onChange(new CustomEvent('selectChange', {
                      detail: {
                        selectedItems: [option]
                      }
                    }));

                    setOpen(false);
                  }
                }}
              >
                {
                  selectMode === 'multi' &&
                  <div>
                    <input
                      type="checkbox"
                      checked={!!multiSelectMap[option.value as any]}
                      onChange={e => {
                        console.info(e);
                        setMultiSelectMap(i => ({
                          ...i,
                          [option.value as any]: option,
                        }));
                      }}
                    />
                  </div>
                }
                <div>
                  {option.label}
                </div>
              </div>
            ))
          }
        </div>
        {/* Footer for multi */}
        <footer className={new Dc('p-1 border-t flex justify-end gap-2', { hidden: selectMode === 'single' }).toString()}>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              onChange(
                new CustomEvent('selectChange', {
                  detail: {
                    selectedItems: Object.values(multiSelectMap)
                  }
                })
              );
              setOpen(false);
            }}>Apply</Button>
        </footer>
      </section >
    </div >
  );
}
