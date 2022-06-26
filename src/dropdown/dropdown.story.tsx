import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import Dropdown, { DropdownProps } from './dropdown.component';

import { Icon } from '@mdi/react';
import { mdiFlag, mdiFlagCheckered } from '@mdi/js';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

const story: Story<React.ComponentType<DropdownProps>> = args => <Dropdown {...args} />;

export const Default = story.bind({});

Default.args = {
  items: [
    {
      label: 'hey jim',
      id: ' hi'
    },
    {
      label: 'whats up',
      id: 'jim'
    }
  ],
  label: 'Placeholder',
  onSelect: () => void 0
} as DropdownProps;

export const WithActions = (): React.ReactElement => {
  const [selected, setSelected] = useState<{ id: string }>({ id: '' });
  return (
    <div>
      <Dropdown
        items={[
          {
            id: '1',
            label: 'Something 1'
          },
          {
            id: '2',
            label: 'Something 2'
          }
        ]}
        label="Please choose something"
        onSelect={e => setSelected(e.detail)}
      />
      <div className="font-bold">Currently Selected Item: </div> {selected.id}
    </div>
  );
};

export const WithReact = (): React.ReactElement => (
  <div>
    <Dropdown
      label={
        <em>Emphasized</em>
      }
      items={[
        {
          id: '1',
          label: <div className="flex">
            <Icon path={mdiFlag} size={1} />
            <div>
              Flag
            </div>
          </div>
        },
        {
          id: '2',
          label: <div className="flex">
            <Icon path={mdiFlagCheckered} size={1} />
            <div>
              Flag 2
            </div>
          </div>
        }
      ]}
      onSelect={() => void 0}
    />
  </div>
);
