module.exports = {
  async rewrites() {
    return [
      {
        source: "/storybook",
        destination: "/storybook/index.html",
      },
    ];
  },
};
