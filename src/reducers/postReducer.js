import { ADD_POST } from '../actions/postActions';

const initialState = {
  last_action: '',
  posts: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload], last_action: action.type };
    default:
      return state;
  }
};
