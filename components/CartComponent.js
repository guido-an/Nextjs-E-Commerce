import React, { Component } from "react";
import AddToCartComponent from "./AddToCartComponent";

class CartComponent extends Component {
 

  addProduct = product => {
    let productsInCart = [...this.state.productsInCart, product]; // add new product to the array in the cart
    this.setState({
      productsInCart: productsInCart
    });
  };

  render() {
    return (
      <div>
        cart component
        <AddToCartComponent />
      </div>
    );
  }
}

export default CartComponent;
