import React, { Component } from 'react';
import './style.css'

class Profile extends Component {
    render(){
        return(
            <div className="containerCompany">
                <h1>Nome da empresa</h1>
                <h1>CNPJ</h1>
                <h1>Telefone</h1>
            </div>
        )
    }
}

export default Profile;