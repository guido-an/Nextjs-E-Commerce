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
    this.props.addNinja(this.state); 
    this.setState({
    quantity: this.state.quantity
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>add to cart</button>
           <h1>{this.props.test}</h1>
        </form>
      </div>
    );
  }
}

export default AddToCartComponent;
