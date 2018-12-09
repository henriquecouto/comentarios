import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessages = {
            'auth/email-already-in-use': 'O e-mail já está em uso!',
            'auth/weak-password': 'Sua senha está muito fraca!',
            'auth/invalid-email': 'O e-mail não é válido'
        }
        return (
            <div>
                <h3>Criar conta</h3>
                <form className='form-inline'>
                    <input className='form-control mr-2' placeholder="Email..." type="text" onChange={this.handleChange('email')} ></input>
                    <input className='form-control mr-2' placeholder="Senha..." type='password' onChange={this.handleChange('passwd')} ></input>

                    <button type='button' onClick={this.createAccount} className='btn btn-primary mr-2' >Cadastrar</button>
                    <button onClick={() => this.props.changeButton('login')} className='btn mr-2' >Quero entrar!</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className='mt-4 card text-white bg-danger'>
                        <div className='card-header'>
                            <b>Erro ao Cadastrar:</b>
                        </div>
                        <div className='card-body'>
                            {(errorMessages[this.props.signUpError])}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SignUp