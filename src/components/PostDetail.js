import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post, comments }) {
  const { title, body } = post;
  const commentItems = comments.map((comment, i) => (
    <li key={i}>
      {comment}
    </li>
  ));

  return (
    <section>
      <h1>Post Detail</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Comments</h3>
      <ul>
        {commentItems}
      </ul>
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostDetail;
