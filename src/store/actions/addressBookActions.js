import * as types from '../types/addressBookTypes';

import Api from '../../services/api';

import {
  transformUserList,
  transformUserProfile,
} from '../transformers/addressBookTransformers';

export const loadListError = (error) => ({
  type: types.LOAD_LIST_ERROR,
  error,
});

export const loadListStart = () => ({
  type: types.LOAD_LIST_START,
});

export const loadListSuccess = (userList) => ({
  type: types.LOAD_LIST_SUCCESS,
  userList,
});

export const loadUserList = () => async (dispatch) => {
  dispatch(loadListStart());

  const result = await Api.loadUserList();

  const { response: userListReponse, error } = result;

  if (error) {
    return dispatch(loadListError(error));
  }

  const transformedData = await transformUserList(userListReponse);

  return dispatch(loadListSuccess(transformedData));
};
