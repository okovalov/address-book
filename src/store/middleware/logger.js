const logger = (store) => (next) => (action) => {
  console.log('redux - dispatching', action);
  const result = next(action);
  console.log('redux - next state', store.getState());
  return result;
};

export default logger;
