import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { getAllPosts } from '../selectors/postSelectors';

const mapStateToProps = state => ({
  posts: getAllPosts(state)
});

export default connect(
  mapStateToProps,
)(Posts);

