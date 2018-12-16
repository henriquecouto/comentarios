import React from 'react'
import Comment from './Comment'

class Comments extends React.Component {

    render() {
        let keys = Object.keys(this.props.comments).reverse()
        return (
            <div>
                {keys.map(key => <Comment key={key} c={this.props.comments[key]} u={this.props.user} d={this.props.deleteComment} />)}
            </div >
        )
    }
}

export default Comments