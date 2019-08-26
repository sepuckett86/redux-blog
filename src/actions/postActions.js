export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function addPost(title, body) {
  return {
    type: ADD_POST,
    payload: {
      title,
      body
    }
  };
}

export function deletePost(index) {
  return {
    type: DELETE_POST,
    payload: index
  };
}

export function updatePost(index, body) {
  return {
    type: UPDATE_POST,
    payload: {
      index,
      body
    }
  };
}
