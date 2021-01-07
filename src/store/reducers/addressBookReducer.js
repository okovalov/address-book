import addressBookInitialState from '../initialState/addressBookInitialState';
import * as types from '../types/addressBookTypes';

const addressBookReducer = (state = addressBookInitialState, action) => {
  switch (action.type) {
    case types.LOAD_LIST_START:
      return {
        ...state,
        userList: addressBookInitialState.userList,
        error: addressBookInitialState.error,
        isLoading: true,
        isListLoaded: false,
      };
    case types.LOAD_LIST_SUCCESS:
      return {
        ...state,
        userList: action.userList,
        isLoading: false,
        isListLoaded: true,
      };
    case types.LOAD_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isListLoaded: true,
        userList: addressBookInitialState.userList,
        error: { ...action.error },
      };
    case types.LOAD_USER_START:
      return {
        ...state,
        selectedUserDetails: addressBookInitialState.selectedUserDetails,
        error: addressBookInitialState.error,
        isLoading: true,
      };
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        selectedUserDetails: action.userData,
        isLoading: false,
      };
    case types.LOAD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        selectedUserDetails: addressBookInitialState.selectedUserDetails,
        error: { ...action.error },
      };
    default:
      return state;
  }
};

export default addressBookReducer;
