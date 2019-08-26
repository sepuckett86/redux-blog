import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function Posts({ posts }) {
  const postItems = posts.map(post => (
    <Post key={`${post.title} ${post.body}`} title={post.title} body={post.body} />
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
