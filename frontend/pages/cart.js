import React, { Component } from "react";
import Layout from "../components/Layout";

class Cart extends Component {
  state = {
    totalPriceCart: 0,
    vendorBjt: [ ],
    vendorRinci: [ ],
  };

  // on page load calculate totalPriceCart 
  componentDidMount() {
    this.calculateTotalPrice(this.props.productsInCart);
    this.filterVendorBjt("Bjt")
    this.filterVendorRinci("Rinci")
  }

  // if a product is removed update totalPriceCart  
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.calculateTotalPrice(this.props.productsInCart);
      this.filterVendorBjt("Bjt")
      this.filterVendorRinci("Rinci")
    } 
  }

  // collect Bjt product 
  filterVendorBjt(vendorName) { 
    let vendorProducts = this.props.productsInCart.filter(product => {
      return product.vendor_name == vendorName
    }) 
    this.setState({
      vendorBjt: vendorProducts
    })
  }

  // collect Rinci product 
  filterVendorRinci(vendorName) { 
    let vendorProducts = this.props.productsInCart.filter(product => {
      return product.vendor_name == vendorName
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
  {console.log(this.state.vendorBjt)}
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


      
    </Layout>
  );
}
}

export default Cart;
