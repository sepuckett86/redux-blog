import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { getPost } from '../selectors/postSelectors';
import { getComments } from '../selectors/commentSelectors';

const mapStatetoProps = (state, props) => ({
  post: getPost(state, props.match.params.index),
  comments: getComments(state, props.match.params.index)
});

export default connect(mapStatetoProps)(PostDetail);
