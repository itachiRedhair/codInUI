import config from "./../config";

const constants = {
  API_URL: config.env.DEV
    ? "http://codin-backend.qbbvxnf82n.us-east-1.elasticbeanstalk.com"
    : "prod_url",
  // API_URL: config.env.DEV ? "http://localhost:3000" : "prod_url",

  STATIC_DATA_URL: "/",

  httpStatus: {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404
  },

  responseMessage: {
    LOGGED_OUT: "LOGGED_OUT",
    UNAUTHORIZED: "UNAUTHORIZED"
  }
};

export default constants;
