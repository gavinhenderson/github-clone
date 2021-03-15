module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config) => {
    if (config.mode != 'development') {
      config.output.publicPath = '/storybook/';
    }
    return config;
  },
  managerWebpack: async (config) => {
    if (config.mode != 'development') {
      config.output.publicPath = '/storybook/';
    }
    return config;
  },
};
