import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import SignUp from './SignUp'
import User from './User'
import 'bootstrap-css-only'

import { database, auth } from './firebase'

class App extends Component {

  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    isSignUpError: false,
    signUpError: '',
    user: {},
    userScreen: 'login'
  }

  addComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userid: this.state.user.uid,
      commentid: id
    }
    database.ref().update(comments)

  }

  login = async (email, passwd) => {
    this.setState({
      authError: '',
      isAuthError: false
    })
    try {
      await auth.signInWithEmailAndPassword(email, passwd)
    } catch (err) {
      this.setState({
        authError: err.code,
        isAuthError: true
      })
    }
  }

  createAccount = async (email, passwd) => {
    this.setState({
      signUpError: '',
      isSignUpError: false
    })
    try {
      await auth.createUserWithEmailAndPassword(email, passwd)
    } catch (err) {
      this.setState({
        signUpError: err.code,
        isSignUpError: true
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
      } else {
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

  changeButton = value => {
    this.setState({
      userScreen: value,
      isAuthError: false,
      authError: '',
      isSignUpError: false,
      signUpError: ''
    })
  }

  deleteComment = commentid => event =>{
    console.log('deletar comentário', commentid)
  }

  render() {
    return (
      <div className='container mt-4'>

        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout} />}

        {
          !this.state.isAuth &&
          this.state.userScreen === 'login' &&
          <Login login={this.login} isAuthError={this.state.isAuthError} authError={this.state.authError} changeButton={this.changeButton} />
        }

        {
          !this.state.isAuth &&
          this.state.userScreen === 'signup' &&
          <SignUp createAccount={this.createAccount} isSignUpError={this.state.isSignUpError} signUpError={this.state.signUpError} changeButton={this.changeButton} />
        }

        {this.state.isAuth && <NewComment addComment={this.addComment} />}

        <br></br>
        {
          this.state.isAuth &&
          <Comments comments={this.state.comments} user={this.state.user} deleteComment={this.deleteComment} /> 
        }
        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    )
  }
}

export default App
