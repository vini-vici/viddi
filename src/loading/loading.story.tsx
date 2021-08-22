import React, { ComponentType } from 'react';

import { Meta, Story } from '@storybook/react';
import Loading from './loading.component';

import { mdiCog, mdiLoading } from '@mdi/js';

export default {
  title: 'Loading',
  component: Loading
} as Meta;

const story: Story<ComponentType<typeof Loading>> = args => <Loading {...args} />;

export const Default = story.bind({});
Default.args = {
  size: 1,
  text: 'Custom',
  icon: mdiLoading
};

export const CustomIcon = story.bind({});
CustomIcon.args = {
  icon: mdiCog
};