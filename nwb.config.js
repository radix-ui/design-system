var isTest = process.env.NODE_ENV === 'test';

var config = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    plugins: 'babel-plugin-styled-components'
  }
}

if (isTest) {
  config.karma = {
    testContext: 'tests/config.test.js',
  }
}

module.exports = config;