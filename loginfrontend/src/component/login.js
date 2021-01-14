import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        credentials: {username:"", password:""}
    }

    login = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state.credentials),
        }).then(data => data.json())
        .then(
            data => {
                console.log(data);
            }
        ).catch(
            error => console.error(error))
    }

    register = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state.credentials),
        }).then(data => data.json())
        .then(
            data => {
                console.log(data);
            }
        ).catch(
            error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.credentials.username} 
                    onChange={this.inputChanged} />
             