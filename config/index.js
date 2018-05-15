// import path from 'path';
const path = require("path");

const basePath = path.resolve(__dirname, "..");

const config = {
  environment: process.env.NODE_ENV || "development",

  dir_src: path.join(basePath, "src"),
  dir_dist: path.join(basePath, "dist")
};

config.env = {
  DEV: config.environment === "development",
  PROD: config.environment === "production",
  TEST: config.environment === "test",
  OFFICE: config.environment === "office"
};

module.exports = config;
