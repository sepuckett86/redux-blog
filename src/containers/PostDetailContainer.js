import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { getPost } from '../selectors/postSelectors';

export default class PostDetailContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const index = this.props.match.params.index;
    return (
      <PostDetail />
    );
  }
}

const mapStatetoProps = (state, index) => ({
  post: getPost(state, index)
});

connect(mapStatetoProps)(PostDetailContainer);

