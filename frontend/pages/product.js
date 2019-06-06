import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from "react";
import vendors from "../vendors.json";
import fetch from "isomorphic-unfetch";

class Product extends Component {
  static async getInitialProps({ query }) {
    // get the single product API from backend index.js with route params
    const res = await fetch(
      `http://localhost:5000/product/${query.vendor_id}/${query.product_id}`
    );
    const data = await res.json();
    console.log(query);

    return { product: data, query }; // pass the product to the state 
  }

  state = {
    quantity: 1,
    img: "",
    name: "",
    desc: "",
    price: "",
    weight: ""
  };

  componentDidMount() {
    const { img, name, desc, price, weight } = this.props.product; // receive the product from getInitialProps 
    this.setState({
      img: img,
      name: name,
      desc: desc,
      price: price,
      weight: weight
    });
  }

  increaseQuantiy = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  decreaseQuantity = () => {
    if (this.state.quantity <= 1) {
      // prevent quantity below 0
      this.setState({
        quantity: (this.state.quantity = 1)
      });
    } else {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.updateCart(this.state);
  // };

  render() {
    const { product } = this.props;

    return (
      <Layout>
        <img src={product.img} width="120px" />
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <p>{product.weight}</p>
        <p>Quantity: {this.state.quantity}</p>
        <button onClick={this.increaseQuantiy}>increase quantity</button>
        <button onClick={this.decreaseQuantity}>decrease quantity</button>
        <h2>{parseInt(product.price) * this.state.quantity} €</h2>
        {/* function passed down by _app.js */}
        <button onClick={() => this.props.updateCart(this.state)}>
          UPDATE CART
        </button>   
        <Link href="/cart">
          <a>view cart</a>
        </Link>
      </Layout>
    );
  }
}

export default Product;
