export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function addComment(postIndex, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      postIndex,
      comment
    }
  };
}

export function deleteComment(postIndex, commentIndex) {
  return {
    type: DELETE_COMMENT,
    payload: {
      postIndex,
      commentIndex
    }
  };
}

