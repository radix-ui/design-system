const path = require('path');

module.exports = ({ config, mode }) => {
  config.watchOptions = {
    ...config.watchOptions,
    ignored: [
      // ignore all `node_modules` except `mdlz-prmtz`
      /node_modules([\\]+|\/)+(?!mdlz-prmtz)/,
      // ignore all `node_modules` inside `mdlz-prmtz`
      /\mdlz-prmtz([\\]+|\/)node_modules/,
    ],
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    include: path.resolve(__dirname, '../src'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
