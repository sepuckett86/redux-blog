import React from 'react';
import AllPosts from '../containers/AllPosts';
import CreatePost from '../containers/CreatePost';
// import PostDetailContainer from '../components/PostDetailContainer';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={AllPosts}/>
      <Route path="/create" component={CreatePost}/>
      {/* <Route path="/post/:index" component={PostDetailContainer}/> */}
    </Router>
  );
}
