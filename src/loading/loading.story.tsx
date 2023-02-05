import React, { ComponentType } from 'react';

import { Story } from '@ladle/react';
import Loading from './loading.component';

import { mdiCog, mdiLoading } from '@mdi/js';

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