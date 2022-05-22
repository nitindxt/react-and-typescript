const postcssPresetEnv = require("postcss-preset-env");
const postcssAutoprefixer = require("autoprefixer");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: [
    postcssPresetEnv(/* {stage: 1} */),
    postcssAutoprefixer(/* pluginOptions */),
    postcssNesting(/* pluginOptions */),
  ],
};
