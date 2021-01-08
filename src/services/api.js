import axios from 'axios';

import { API_URL, LIMIT_PARAMETER_NAME } from '../constants/api';

export const loadUserList = async (limit = 50) => {
  const axiosParams = { params: { [LIMIT_PARAMETER_NAME]: limit } };

  let response;

  const url = API_URL;

  try {
    response = await axios.get(url, axiosParams);
  } catch (error) {
    return { error: { message: error.message } };
  }

  const { error: errorMessage } = response;

  if (errorMessage) {
    return { error: { message: errorMessage } };
  }

  return { response };
};

const Api = {
  loadUserList,
};

export default Api;
