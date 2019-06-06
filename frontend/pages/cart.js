import React, { Component } from 'react'
import Layout from "../components/Layout";




class Cart extends Component {
 


    render() {
        console.log(this.props)
        {console.log(this.props.productsInCart)}
        return(
            <Layout>
  {this.props.productsInCart.map((product, index) => {
      return <div index={product.id}>
          
          <p><strong>Product:</strong>{product.name}</p>
          <p><strong>Quantity:</strong>{product.quantity}</p>
          <p><strong>Total: </strong>{product.quantity * parseInt(product.price)}€</p>
          
          <button onClick={() => this.props.deleteProduct(product.id)}>remove product</button>
      </div>
  })}      
            </Layout>  
        )
    }
}



export default Cart