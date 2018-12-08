import React from 'react'

const user = props => {
    return (
        <div>
            Logado como: {props.email}
            <button onClick={props.logout}>Sair</button>
        </div>
    )
}

export default user