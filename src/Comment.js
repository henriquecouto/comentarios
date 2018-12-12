import React from 'react'
import 'bootstrap-css-only'

class Comment extends React.Component {
    state = {
        show: false
    }
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
                        {!this.state.show && <button
                            type='button'
                            className='btn bg-danger text-white'
                            // onClick={this.props.d(this.props.c.commentid)}
                            onClick={() => this.setState({
                                show: true
                            })}
                        >
                            Excluir
                        </button>}
                        {this.state.show && 
                            <div>
                                <p>Certeza que deseja excluir este comentário?</p>
                                <button className='btn bg-danger text-white mr-2' onClick={this.props.d(this.props.c.commentid)}>
                                    Sim
                                </button>
                                <button className='btn btn-primary' onClick={() => this.setState({
                                    show: false
                                })}>
                                    Não
                                </button>
                            </div>}
                    </div>
                }

            </div>
        )
    }

}


export default Comment