import React, { ComponentType } from 'react';

import { Story } from '@ladle/react';

import Modal from './modal.component';

const story: Story<ComponentType<typeof Modal>> = args => <Modal show {...args}/>;

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