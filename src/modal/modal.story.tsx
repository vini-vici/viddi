import React, { ComponentType } from 'react';

import { Meta, Story } from '@storybook/react';

import Modal from './modal.component';

export default {
  title: 'Modal',
  component: Modal
} as Meta;

const story: Story<ComponentType<typeof Modal>> = args => <Modal {...args}/>;

export const Default = story.bind({});
Default.args = {
  children: 'Content Text; can be valid JSX',
  show: true,
  onClose: () => void 0,
  onConfirm: () => void 0,
  title: 'Title Text (can be valid JSX)',
  confirmText: 'Confirm Text (JSX)',
  cancelText: 'Cancel Text (JSX)'
};