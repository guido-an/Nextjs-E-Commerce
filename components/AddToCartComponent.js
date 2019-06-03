import React, { Component } from "react";

class AddToCartComponent extends Component {
  state = {
    quantity: "",
    img: "",
    name: "",
    desc: "",
    price: "",
    weight: ""
  };

  handleSubmit = e => {
    e.preventDefault(); 
    this.props.addProduct(this.state); 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>add to cart</button>
          <h1>{this.props.name}</h1>
         
        </form>
      </div>
    );
  }
}

export default AddToCartComponent;
