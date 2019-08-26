import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [{ title: 'default post', body: 'my post' }];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_POST:
      return state.map((post, index) => {
        return index === action.payload.index ? 
          { title: post.title, body: action.payload.body } :
          post;
      });
    default:
      return state;
  }
};
