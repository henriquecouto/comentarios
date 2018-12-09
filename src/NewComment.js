import React, { Component } from 'react'
import 'bootstrap-css-only'

class NewComment extends Component {

    state = {
        newComment: ''
    }

    newComment = event => {
        this.setState({
            newComment: event.target.value
        })
    }

    addComment = () => {
        this.props.addComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }

    render() {
        return (
            <div className='card mt-2'>
                <div className='card-header'>
                    <h3>Comentar</h3>
                </div>
                <div className='card-body'>
                    <form className='form-inline'>
                        <textarea className='form-control mr-2' value={this.state.newComment} onChange={this.newComment}></textarea>
                        <button className='btn btn-primary' onClick={this.addComment}>Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewComment