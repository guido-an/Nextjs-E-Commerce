
import React, { Component } from "react";
import Router from 'next/router'

export default class PrivateComponent extends Component {
    componentDidMount(){
        const loggedIn = localStorage.getItem("loggedIn");
        if(!loggedIn) {
            Router.push("/login")
        }
    }
removeItem = () => {
    localStorage.removeItem('loggedIn')
    Router.push('/login')
}
    render(){
        return(
            <>
            <div>test</div>
            <button onClick={this.removeItem}>logout</button>
            </>
        )
    }
}