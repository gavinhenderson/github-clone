module.exports = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.output.publicPath = "/storybook/";
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = "/storybook/";
    return config;
  },
};
