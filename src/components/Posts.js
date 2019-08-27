import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function Posts({ posts }) {
  const postItems = posts.map((post, i) => (
    <li key={i}>
      <Post title={post.title} body={post.body} index={i} />
    </li>
  ));

  return (
    <ul>
      {postItems}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Posts;
