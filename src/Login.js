import React, { Component } from 'react'
import 'bootstrap-css-only'

class Login extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessages = {
            'auth/wrong-password': 'Sua senha está incorreta, tente novamente!',
            'auth/user-not-found': 'E-mail não cadastrado!',
            'auth/invalid-email': 'O e-mail não é válido'
        }
        return (
            <div>
                <div className='card'>
                <div className='card-header'>

                <h3>Entre para comentar: </h3>
                </div>
                <div className='card-body'>

                <form className='form-inline'>
                    <input className='form-control mr-2 mt-2' placeholder="Email..." type="text" onChange={this.handleChange('email')} ></input>
                    <input className='form-control mr-2 mt-2' placeholder="Senha..." type='password' onChange={this.handleChange('passwd')} ></input>

                    <button type='button' onClick={this.login} className='btn btn-primary mr-2 mt-2' >Entrar</button>
                    <button onClick={() => this.props.changeButton('signup')} className='btn mr-2 mt-2'>Quero me cadastrar!</button>
                </form>
                </div>
                </div>
                {
                    this.props.isAuthError &&
                    <div className='mt-4 card text-white bg-danger'>
                        <div className='card-header'>
                            <b>Erro ao Entrar:</b>
                        </div>
                        <div className='card-body'>
                            {(errorMessages[this.props.authError])}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Login