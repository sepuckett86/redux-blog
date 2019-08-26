import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import { addPost } from '../actions/postActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(addPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
