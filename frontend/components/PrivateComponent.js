
import React, { Component } from "react";
import Router from 'next/router'
import axios from 'axios'

export default class PrivateComponent extends Component {

    state = {
        orders: ""
    }
    componentDidMount(){

        const loggedIn = localStorage.getItem("loggedIn");
        if(!loggedIn) {
            Router.push("/login")
        }

      axios.get('http://localhost:5000/orders')
      .then((orders) => {
          this.setState({
              orders: orders.data
          })
        
      })
      .catch(err => {
          console.log(err)
      })
      
    }
removeItem = () => {
    localStorage.removeItem('loggedIn')
    Router.push('/login')
}
    render(){
        return(
            <>
            <div>private page</div>
            <pre>{JSON.stringify(this.state.orders, "\t", 2)}</pre> 
            <button onClick={this.removeItem}>logout</button>
            </>
        )
    }
}