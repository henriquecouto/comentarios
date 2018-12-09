import React, { Component } from 'react'

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
                <h3>Login</h3>

                <input placeholder="Email..." type="text" onChange={this.handleChange('email')} ></input>
                <input placeholder="Senha..." type='password' onChange={this.handleChange('passwd')} ></input>

                <button type='button' onClick={
                    this.login
                } >Entrar</button>
                <button onClick={() => this.props.changeButton('signup')} >Ainda não tenho uma conta! Quero me cadastrar</button>

                {
                    this.props.isAuthError &&
                    <p>
                        <b>Erro: </b>{(errorMessages[this.props.authError])}
                    </p>
                }

            </div>
        )
    }
}

export default Login