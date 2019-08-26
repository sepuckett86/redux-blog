export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function createPost(title, body) {
  return {
    type: ADD_POST,
    payload: {
      title,
      body
    }
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function updatePost(id, body) {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      body
    }
  };
}
