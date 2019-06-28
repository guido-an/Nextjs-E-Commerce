import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from "react";
import vendors from "../vendors.json";
import fetch from "isomorphic-unfetch";

class Product extends Component {
  static async getInitialProps({ query }) {
    // get the single product API from backend index.js with route params
    const res = await fetch(
      `http://localhost:5000/product/${query.product_id}`
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
    weight: "",
    vendor_name: "",
    vendor: "",
    product_url: ""
    
  };

  componentDidMount() {
    const {
      img,
      name,
      desc,
      price,
      weight,
      vendor_name,
      product_id,
     product_url
    } = this.props.product; // receive the product from getInitialProps
    this.setState({
      img: img,
      name: name,
      desc: desc,
      price: price,
      weight: weight,
      vendor_name: vendor_name,
      product_id: product_id,
      product_url: product_url
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

  render() {
    const { product } = this.props;

    return (
      <Layout>
        <section className="container product-container">
          <div>
            <img
              src={`../static/images/${product.product_url}.jpg`}
              width="400px"
            />
          </div>

          <div className="product-description">
            <h1>{product.name}</h1>
            <p className="product-price">
              <strong>{product.price}€</strong>
            </p>
            <p>{product.desc}</p>

            <div className="quantity-container">
              <p>
                <strong>Quantity: {this.state.quantity}</strong>
              </p>
              <span
                className="increase-quantity-btn"
                onClick={this.increaseQuantiy}
              >
                +
              </span>
              <span
                className="decrease-quantity-btn"
                onClick={this.decreaseQuantity}
              >
                -
              </span>
            </div>

            <p className="total-price">
              Total price: {parseInt(product.price) * this.state.quantity} €
            </p>
            {/* function passed down by _app.js */}
            <button onClick={() => this.props.updateCart(this.state)}>
              ADD TO CART
            </button>
             {this.props.viewCart ? (
             <div>
             <Link href="/cart">
              <a className="view-cart">{this.props.viewCart} View Cart</a>
            </Link>
            <span >or </span>
            <Link href="/">
              <a className="continue-shopping"> Continue Shopping</a>
            </Link>
               </div>
            ) : (
              <p></p>
            )}

            
            
          </div>
        </section>
        <style jsx>{`
          .product-container img {
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            margin: 40px;
            transition: all 0.3s
          }
          .product-container img:hover{
            transform: scale(1.1)
          }
          .product-price{
            font-size: 20px
          }
          .product-description {
            margin-top: 40px;
          }
          .quantity-container {
            display: flex;
            font-size: 18px;
          }
          .quantity-container p {
            margin-right: 20px;
            margin-top: 20px;
          }
          .quantity-container span {
            margin-left: 20px;
            margin-top: 20px;
            position: relative;
            bottom: 5px;
            font-size: 22px;
            font-weight: 600;
            border: 1px solid #212529;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            text-align: center;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
          }
          .quantity-container span:hover {
            background-color: #fafafa;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transform: scale(1.1);
          }

          .total-price {
            color: #222 !important;
            font-size: 18px;
            font-weight: 700;
            margin-top: 20px;
          }
          .product-description button {
            background-color: green;
            color: #fff;
            border-radius: 4px;
            padding: 8px 20px;
            font-size: 14px;
            margin-top: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          }
         
          button{
            transition: all 0.3s
          }
          button:hover{
            transform: scale(1.1);
          }
          .view-cart,
          .continue-shopping{
            display: inline-block;
            margin-top: 20px;
            padding-right: 10px;
            
          }
          .view-cart:hover,
          .continue-shopping:hover{
           text-decoration: none
          }
          
          @media only screen and (min-width: 768px) {
            .product-container {
              display: flex;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default Product;
