import React, { Component } from 'react'
import Layout from "../components/Layout";




class Cart extends Component {
  
    render() {
        {console.log(this.props)}
        return(
            <Layout>
  {this.props.productsInCart.map((product, index) => {
      return <div index={product.id}>
          <p>{product.name}</p>
          <p>{product.quantity}</p>

          <button onClick={() => this.props.deleteProduct(product.id)}>remove product</button>
      </div>
  })}      
            </Layout>  
        )
    }
}



export default Cart