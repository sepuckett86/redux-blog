import React from 'react';
import PropTypes from 'prop-types';

function Post({ title, body }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
