import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox/CommentBox';

class App extends Component {
  render() {
    return (
      <div className="commentList">
        <CommentBox />
    </div>
    );
  }
}

export default App;
