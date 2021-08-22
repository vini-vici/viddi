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
    },
    '@storybook/addon-controls'
  ],
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.module\.css$/,
      use: [
        require.resolve('style-loader'), 
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            implementation: require('postcss')
          }
        }
      ]
    });

    config.module.rules.find(
      rule => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    return config;
  }
} as StorybookConfig;