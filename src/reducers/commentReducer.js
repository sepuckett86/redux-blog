import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

const initialState = {
  0: ['Comment', 'Comment2']
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_COMMENT: {
      const { postIndex, comment } = action.payload;
      return { 
        ...state, 
        [postIndex]: [...state[postIndex], comment] 
      };
    }
    case DELETE_COMMENT: {
      const { postIndex, commentIndex } = action.payload;
      return { 
        ...state, 
        [postIndex]: state[postIndex].filter((_, index) => index !== commentIndex) };
    }
    case DELETE_POST: {
      const index = action.payload;
      const newState = { ...state };
      delete newState[index];
      return newState;
    }
    default:
      return state;
  }
};
