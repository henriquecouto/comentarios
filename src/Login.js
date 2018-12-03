import React, {Component} from 'react'

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

    render(){
        return (
            <div>
            <h3>Login</h3>
            
            <input placeholder="Email..." type="text" onChange={this.handleChange('email')} ></input> 
            <input placeholder="Senha..." type='password' onChange={this.handleChange('passwd')} ></input>
            
            <button type='button' onClick={this.login} >Entrar</button>

            </div>
        )
    }
}

export default Login