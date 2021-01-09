import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from './middleware/logger';

const configureStore = (initialState = {}) => {
  const middleware = [thunk, logger];

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};

export default configureStore;
