import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from 'next/link'

class Cart extends Component {
  state = {
    totalPriceCart: 0,
    vendorBjt: [ ],
    vendorRinci: [ ],
    minPriceShipping: 50
  };

  // on page load calculate totalPriceCart 
  componentDidMount() {
    this.calculateTotalPrice(this.props.productsInCart);
    this.filterVendorBjt()
    this.filterVendorRinci()
  }

  // if a product is removed update totalPriceCart  
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.calculateTotalPrice(this.props.productsInCart);
      this.filterVendorBjt()
      this.filterVendorRinci()
    } 
    console.log(this.state)
  }

  // collect Bjt products 
  filterVendorBjt() { 
    let vendorProducts = this.props.productsInCart.filter(product => {
      return product.vendor_name == "Bjt"
    }) 
    this.setState({
      vendorBjt: vendorProducts
    })
  }

  // collect Rinci products
  filterVendorRinci() { 
    let vendorProducts = this.props.productsInCart.filter(product => {
      return product.vendor_name == "Rinci"
    }) 
    this.setState({
      vendorRinci: vendorProducts
    })
  }


   // caluclate totalPriceCart function (array is a parameter for this.props.productsInCart)
   calculateTotalPrice = array => {
    let totalPricesArray = [];
    array.forEach(product => {
      let productPrice = parseInt(product.price) * product.quantity;
      totalPricesArray.push(productPrice);
    });
    let totalPriceCart = totalPricesArray.reduce((a, b) => a + b, 0);
    this.setState({
      totalPriceCart: totalPriceCart
    });
  };


render() {
  return (
    <Layout>
      {/* Bjt vendor */}
    <h2>Bjt products</h2>
      {this.state.vendorBjt.length > 0 ? (
         
      this.state.vendorBjt.map(product => {
        return <div>

          <p><strong>Name: </strong> {product.name}</p>
          <p><strong>Quantity: </strong> {product.quantity}</p>
          <p><strong>Total: </strong> {product.quantity * parseInt(product.price)}€</p>
          <button onClick={() => this.props.deleteProduct(product.id)}>
                     remove product
          </button>
        </div>
      })
          
      ) : (
       null
      )}
      <h2>Total price cart: {this.state.totalPriceCart}€</h2>

      <Link href="/checkout"><a>checkout </a></Link>
    </Layout>
  );
}
}

export default Cart;
