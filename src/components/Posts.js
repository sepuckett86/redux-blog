import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function Posts({ posts }) {
  const postItems = posts.map(post => (
    <li key={`${post.title} ${post.body}`}>
      <Post title={post.title} body={post.body} />
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
