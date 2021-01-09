import { combineReducers } from 'redux';

import addressBook from './addressBookReducer';

const rootReducer = combineReducers({
  addressBook,
});

export default rootReducer;
