import React, { Component } from 'react';
import Comments from './Comments'
import NewComment from './NewComment'

class App extends Component {

  state = {
    comments: []
  }

  addComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    })
  }

  render() {
    return (
      <React.Fragment>
        <NewComment addComment={this.addComment} />
        <Comments comments={this.state.comments} />
      </React.Fragment>
    );
  }
}

export default App;
