import React from 'react'
import 'bootstrap-css-only'

const user = props => {
    return (
        <div className='card'>
            <div className='card-body bg-dark text-white'>
            Logado como: {props.email}
            <button className='btn ml-2' onClick={props.logout}>Sair</button>
            </div>
        </div>
    )
}

export default user