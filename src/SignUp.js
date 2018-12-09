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

                <input placeholder="Email..." type="text" onChange={this.handleChange('email')} ></input>
                <input placeholder="Senha..." type='password' onChange={this.handleChange('passwd')} ></input>

                <button type='button' onClick={this.createAccount}   >Cadastrar</button>
                <button onClick={() => this.props.changeButton('login')} >Já tenho uma conta! Desejo entrar</button>

                {
                    this.props.isSignUpError &&
                    <p>
                        <b>Erro: </b>{(errorMessages[this.props.signUpError])}
                    </p>
                }


            </div>
        )
    }
}

export default SignUp