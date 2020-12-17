import axios from 'axios';

import * as config from '../config';
import {optionsHandler, errorHandler} from '../adapters/apiHandlers';

export const readAllGroupList = async () => {
  optionsHandler.url = `${config.GROUP_LIST}`;
  optionsHandler.method = 'get';
  optionsHandler.data = null;
  try {
    let res = await axios(optionsHandler);
    // console.log('readAllGroupList response data: ', res.data);
    return res.data;
  } catch (e) {
    throw errorHandler(e);
  }
};
