import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from "react";
import vendors from "../vendors.json";
import fetch from "isomorphic-unfetch";

// class Product extends Component {
//   state = {
//     quantity: 1,
//     img: vendors.data[this.props.query.vendor_id].products[
//       this.props.query.product_id
//     ].img,
//     name: vendors.data[this.props.query.vendor_id].products[
//       this.props.query.product_id
//     ].name,
//     desc: vendors.data[this.props.query.vendor_id].products[
//       this.props.query.product_id
//     ].desc,
//     price: vendors.data[this.props.query.vendor_id].products[
//       this.props.query.product_id
//     ].price,
//     weight:   vendors.data[this.props.query.vendor_id].products[
//       this.props.query.product_id
//     ].weight,

//   };

//   static getInitialProps({ query }) {
//     return { query };
//   }

//   increaseQuantiy = () => {
//     this.setState({
//       quantity: this.state.quantity + 1
//     });
//   };
//   decreaseQuantity = () => {
//     if (this.state.quantity <= 1) { // prevent quantity below 0
//       this.setState({
//         quantity: (this.state.quantity = 1)
//       });
//     } else {
//       this.setState({
//         quantity: this.state.quantity - 1
//       });
//     }
//   };

//   handleSubmit = (e) => {
//     e.preventDefault()
//      this.props.updateCart(this.state)
//   }

//   render() {
//     return (
//       <Layout>

//         <img
//           src={
//             this.state.img
//           }
//           width="120px"
//         />
//         <h1>
//           {
//            this.state.name
//           }
//         </h1>
//         <p>
//           {
//             this.state.desc
//           }
//         </p>
//         <p>

//           {
//            this.state.weight
//           }
//         </p>
//         <p>Quantity: {this.state.quantity}</p>
//         <button onClick={this.increaseQuantiy}>increase quantity</button>
//         <button onClick={this.decreaseQuantity}>decrease quantity</button>

//        <h2>{parseInt(this.state.price) * this.state.quantity} €</h2>

//           <button onClick={() => this.props.updateCart(this.state)}>UPDATE CART </button>

//         <Link href="/cart"><a>view cart</a></Link>

//       </Layout>
//     );
//   }
// }

class Product extends Component {
  static async getInitialProps({ query }) {
    
    // route params
    const res = await fetch(
      `http://localhost:5000/product/${query.vendor_id}/${
        query.product_id
      }`
    ); 
    const data = await res.json();
    console.log(query)
    return { product: data, query }; 
  }

  state = {
    quantity: 1,
    img:
      vendors.data[this.props.query.vendor_id].products[
        this.props.query.product_id
      ].img,
    name:
      vendors.data[this.props.query.vendor_id].products[
        this.props.query.product_id
      ].name,
    desc:
      vendors.data[this.props.query.vendor_id].products[
        this.props.query.product_id
      ].desc,
    price:
      vendors.data[this.props.query.vendor_id].products[
        this.props.query.product_id
      ].price,
    weight:
      vendors.data[this.props.query.vendor_id].products[
        this.props.query.product_id
      ].weight
  };

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateCart(this.state);
  };

  render() {
    const { product } = this.props;
    const img = vendors.data[this.props.query.vendor_id].products[
      this.props.query.product_id
    ].img;
    return (
      <Layout>
        <img src={img} width="120px" />
        <h1>{this.state.name}</h1>
        <p>{this.state.desc}</p>
        <p>{this.state.weight}</p>
        <p>Quantity: {this.state.quantity}</p>
        <button onClick={this.increaseQuantiy}>increase quantity</button>
        <button onClick={this.decreaseQuantity}>decrease quantity</button>

        <h2>{parseInt(this.state.price) * this.state.quantity} €</h2>

        <button onClick={() => this.props.updateCart(this.state)}>
          UPDATE CART{" "}
        </button>

        <Link href="/cart">
          <a>view cart</a>
        </Link>
      </Layout>
    );
  }
}

export default Product;
