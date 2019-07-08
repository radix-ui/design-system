const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../../radix/src'),
      path.resolve(__dirname, '../../radix-icons/src'),
      path.resolve(__dirname, '../../radix-system/src'),
    ],
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@modulz/radix': path.resolve(__dirname, '../../radix/src'),
    '@modulz/radix-icons': path.resolve(__dirname, '../../radix-icons/src'),
    '@modulz/radix-system': path.resolve(__dirname, '../../radix-system/src'),
  };
  return config;
};
