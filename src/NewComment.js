import React, {Component} from 'react'

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

    render(){
        return(
            <div>
                <textarea value={this.state.newComment} onChange={this.newComment}></textarea>
                <button onClick={this.addComment}>Enviar</button>
            </div>
        )
    }
}

export default NewComment