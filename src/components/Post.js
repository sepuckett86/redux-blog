import React from 'react';
import PropTypes from 'prop-types';

function Post({ title, body, key }) {
  return (
    <li key={key}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};

export default Post;
