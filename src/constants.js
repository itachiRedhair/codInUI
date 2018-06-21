import config from './../config';

const constants = {
  API_URL: config.env.DEV
    ? 'http://codin-backend.qbbvxnf82n.us-east-1.elasticbeanstalk.com'
    : 'prod_url',
  // API_URL: config.env.DEV ? "http://localhost:3000" : "prod_url",

  // TODO: Remove this
  responseMessage: {
    LOGGED_OUT: 'LOGGED_OUT',
    UNAUTHORIZED: 'UNAUTHORIZED',
  },
  toaster: {
    TYPE_SUCCESS: 'success',
    TYPE_WARN: 'warn',
    TYPE_ERROR: 'error'
  },

  projectIcons : {
    angular: 'fab fa-angular',
    react: 'fab fa-react'
  }
};

export default constants;
