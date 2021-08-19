// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    './src': { url: '/'}
  },
  exclude: [
    "**/test/**",
    "**/node_modules/**",
    "**/*.story.tsx"
  ],
  plugins: [
    '@snowpack/plugin-typescript'
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true
  },
};
