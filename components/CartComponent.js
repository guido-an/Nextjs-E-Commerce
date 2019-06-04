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
        ***** cart component *****
        <p>{this.props.user}</p>
        <p>{this.props.name}</p>
        *****  *****
      </div>
    );
  }
}

export default CartComponent;
