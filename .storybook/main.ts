import type { StorybookConfig } from '@storybook/react/types';

module.exports = {
  stories: [
    '../src/**/*.story.tsx'
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      }
    }
  ]
} as StorybookConfig;