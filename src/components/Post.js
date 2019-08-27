import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ title, body, index }) {
  return (
    <Link to={`/post/${index}`}>
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired
};

export default Post;
