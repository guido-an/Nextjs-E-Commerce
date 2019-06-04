import React, { Component } from 'react'
import Layout from "../components/Layout";




class Cart extends Component {
  
    render() {
        {console.log(this.props)}
        return(
            <Layout>
  {this.props.productsInCart.map(product => {
      return <div>
          <p>{product.name}</p>
          <p>{product.quantity}</p>

          <button onClick={() => this.props.deleteProduct(product.name)}>remove product</button>
      </div>
  })}      
            </Layout>  
        )
    }
}



export default Cart