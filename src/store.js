import { createStore } from 'redux';

const initialState = {
  last_action: ''
};

const reducer = (state = initialState, action) => {
  return { ...state, last_action: action.type };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
