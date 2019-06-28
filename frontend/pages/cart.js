import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

class Cart extends Component {
  state = {
    totalPriceCart: 0
  };

  // on page load calculate totalPriceCart
  componentDidMount() {
    this.calculateTotalPrice(this.props.productsInCart);
    console.log("cart page", this.props.productsInCart);
  }

  // if a product is removed update totalPriceCart
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.calculateTotalPrice(this.props.productsInCart);
    }
  }

  // calculate totalPriceCart function (array is a parameter for this.props.productsInCart)
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
        {/* Products */}
        <section className="container">
          <div className="products-in-cart-wrapper">
            <table>
              <tr>
                <th>Product</th>
                <th className="field">Vendor</th>
                <th className="field">Price</th>
                <th className="field">Quantity</th>
                <th className="field">Remove</th>
              </tr>
              {this.props.productsInCart.map((product, index) => {
                return (
                  <tr>
                    <td>
                      {" "}
                      <p className="product-name">{product.name}</p>
                      <img
                        src={`../static/images/${product.product_url}.jpg`}
                        width="180px"
                      />{" "}
                    </td>

                    <td>{product.vendor_name}</td>
                    <td>{product.price}€</td>
                    <td>{product.quantity}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => this.props.deleteProduct(product.id)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <p className="total-price">
              Total price: {this.state.totalPriceCart}€
            </p>
            <Link href="/checkout">
              <a className="checkout">Proceed to Checkout </a>
            </Link>
          </div>
        </section>

        <style jsx>
          {`
            table {
              width: 100%;
              margin-top: 80px
          
            }
            table td{
              padding-bottom: 20px;
              border-bottom: 2px solid #fafafa
            }
            .product-name{
              position: relative;
              top: 10px
            }
            .total-price{
              color: #222 !important;
              font-size: 22px;
              font-weight: 700;
              text-align: right
            }
            button {
              width: 40px;
              position: relative;
              left: 10px
              
            }
            .checkout{
              text-align: right;
              display: block;
              margin-bottom: 120px

            }
            .checkout:hover{
               text-decoration: none
            }
          
            @media only screen and (min-width: 1200px) {
              table {
              width: 100%;
              margin: 80px auto;
              }
              .field{
                width: 200px
              }
              
           
          `}
        </style>
      </Layout>
    );
  }
}

export default Cart;
