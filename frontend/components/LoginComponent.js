import React, { Component } from "react";
import AuthService from './auth/AuthService';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    service = new AuthService();

    changeHandler = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
  
        const username = this.state.username;
        const password = this.state.password;
  
        this.service.login(username, password)
          .then(response => {
              console.log(response);
              this.props.setUser(response)
          })
    }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h1>LOGIN</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={e => this.changeHandler(e)}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={e => this.changeHandler(e)}
        />
        <input type="submit" value="signup" />
      </form>
    );
  }
}

