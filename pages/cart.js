import React, { Component } from 'react'
import Layout from "../components/Layout";
import CartComponent from "../components/CartComponent";



class Cart extends Component {
  
    render() {
        return(
            <Layout>
           
           <CartComponent />
            </Layout>  
        )
    }
}

export default Cart