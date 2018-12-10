import React from 'react'
import 'bootstrap-css-only'

class Comment extends React.Component {
    render() {

        let comment = 'vazio'
        let email = 'vazio'
        if (this.props.c) {
            if (this.props.c.comment) {
                comment = this.props.c.comment
            }
            if (this.props.c.email) {
                email = this.props.c.email
            }
        }
        return (
            <div className='card mb-2'>
                <div className='card-body'>
                    {comment} <br />
                    <span className='text-muted'>Enviado por: {email}</span>
                </div>
                {
                    this.props.c.userid === this.props.u.uid &&
                    <div className='card-footer'>
                        <button
                            className='btn bg-danger text-white'
                            onClick={this.props.d(this.props.c.commentid)}
                        >
                            Excluir
                    </button>
                    </div>
                }
            </div>
        )
    }

}


export default Comment