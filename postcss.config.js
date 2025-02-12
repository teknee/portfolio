export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["src/styles/media.css"],
    },
    "postcss-preset-env": {
      stage: 2,
    },
  },
};
