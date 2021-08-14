import type { StorybookConfig } from '@storybook/react/types';

export default {
  stories: [
    '../src/**/*.story.tsx'
  ],
  addons: [
    '@storybook/addon-controls'
  ]
} as StorybookConfig;