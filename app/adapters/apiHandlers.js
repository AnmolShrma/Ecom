import * as config from '../config';

export const errorHandler = (err) => {
  let error = err;

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('error response data: ', error.response.data);
    console.log('error response status: ', error.response.status);
    console.log('error response header: ', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error request data: ', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('error message: ', error.message);
  }
  console.log(error.config);
  if (err.response && err.response.data.hasOwnProperty('message'))
    error = err.response.data;
  else if (!err.hasOwnProperty('message')) error = err.toJSON();
  console.log('error message: ', error.message);
  return {error: error.message};
};

export const optionsHandler = {
  url: '',
  method: '',
  baseURL: config.API_URL,

  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
  data: {},
};
