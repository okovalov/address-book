import * as types from '../types/addressBookTypes';
import { getUserById } from '../selectors/addressBookSelector';
import Api from '../../services/api';

import {
  transformUserList,
  transformUserProfile,
} from '../transformers/addressBookTransformers';

export const loadListStart = () => ({
  type: types.LOAD_LIST_START,
});

export const loadListError = (error) => ({
  type: types.LOAD_LIST_ERROR,
  error,
});

export const loadListSuccess = (userList) => ({
  type: types.LOAD_LIST_SUCCESS,
  userList,
});

export const loadUserStart = () => ({
  type: types.LOAD_USER_START,
});

export const loadUserError = (error) => ({
  type: types.LOAD_USER_ERROR,
  error,
});

export const loadUserSuccess = (userData) => ({
  type: types.LOAD_USER_SUCCESS,
  userData,
});

export const loadUserList = () => async (dispatch) => {
  dispatch(loadListStart());

  const result = await Api.loadUserList();

  const { response: userListResponse, error } = result;

  if (error) {
    return dispatch(loadListError(error));
  }

  const transformedData = await transformUserList(userListResponse);

  return dispatch(loadListSuccess(transformedData));
};

export const loadUserById = (userId) => async (dispatch, getState) => {
  dispatch(loadUserStart());

  const response = getUserById(userId, getState());

  const transformedData = await transformUserProfile(response);

  return dispatch(loadUserSuccess(transformedData));
};
