import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import User from './User'

import { database, auth } from './firebase'

class App extends Component {

  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    user: {}
  }

  addComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userid: this.state.user.uid
    }
    database.ref().update(comments)

    // antes do firebase
    // this.setState({
    //   comments: [...this.state.comments, comment],
    // })
  }

  login = async (email, passwd) => {
    this.setState({
      authError: '',
      isAuthError: false
    })
    try {
      const user = await auth.signInWithEmailAndPassword(email, passwd)
    } catch (err) {
      this.setState({
        authError: err.code,
        isAuthError: true
      })
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user
        })
      }else{
        this.setState({
          isAuth: false,
          user: {}
        })
      }
    })
  }

  logout = () => {
    auth.signOut()
  }

  render() {
    return (
      <React.Fragment>

        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout} />}

        {!this.state.isAuth && <Login login={this.login} isAuthError={this.state.isAuthError} authError={this.state.authError} />}

        {this.state.isAuth && <NewComment addComment={this.addComment} />}

        <br></br>
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando...</p>}
      </React.Fragment>
    )
  }
}

export default App
