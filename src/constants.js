import config from "./../config";

const constants = {
  API_URL: config.env.DEV ? "http://localhost:3000" : "prod_url",

  httpStatus: {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404
  }
};

export default constants;
