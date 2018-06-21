const path = require('path');

const basePath = path.resolve(__dirname, '..');

const config = {
  environment: process.env.NODE_ENV || 'development',

  dirSrc: path.join(basePath, 'src'),
  dirDist: path.join(basePath, 'dist'),
};

config.env = {
  DEV: config.environment === 'development',
  PROD: config.environment === 'production',
  TEST: config.environment === 'test',
};

module.exports = config;
