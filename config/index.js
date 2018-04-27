// import path from 'path';
const path = require('path');


const basePath = path.resolve(__dirname, '..');

const config = {

  enviroment: process.env.NODE_ENV || 'dev',

  dir_src: path.join(basePath, 'src'),
  dir_dist: path.join(basePath, 'dist'),
  dir_server: path.join(basePath, 'server'),

  APP_HOST: process.env.APP_HOST || '10.29.9.66',
  APP_PORT: process.env.APP_PORT || 5500,
  API_HOST: process.env.API_HOST || '10.29.9.66',
  API_PORT: process.env.API_PORT || 6600
}

config.env = {
  DEV: config.enviroment === 'dev',
  PROD: config.enviroment === 'prod',
  TEST: config.enviroment === 'test'
}

module.exports = config;