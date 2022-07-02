import React, { ComponentType } from 'react';

import { Meta, Story } from '@storybook/react';

import Select, { SelectItem, SelectProps } from './select.component';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    placeholder: {
      type: 'string',
      name: 'Placeholder'
    },
    selectMode: {
      type: 'string',
      name: 'Select Mode',
      control: {
        type: 'select',
        options: [
          'single',
          'multi'
        ]
      }
    },
    filter: {
      type: 'boolean',
      name: 'Filter',
      defaultValue: false
    }
  }
} as Meta;

const story: Story<ComponentType<typeof Select>> = args => <Select {...args} />;

export const Default = (args: ComponentType<typeof Select>): React.ReactElement => {
  const [selectedItems, setSelectedItems] = React.useState<SelectItem[]>([]);
  return (
    <>
      <Select
        {...args}
        selectedItems={selectedItems}
        items={Array.from({ length: 50 }, (_, i) => ({
          label: `${String.fromCharCode(60 + i)} Option ${i + 1}`,
          value: i + 1
        }))}
        onChange={e => setSelectedItems(e.detail.selectedItems)}
      />
    </>
  );
};

Default.args = {
  placeholder: 'Heyo',
  selectMode: 'single'
} as Partial<SelectProps>;
