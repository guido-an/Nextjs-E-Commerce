import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class Shop extends Component {
  static async getInitialProps({ query }) {
    // 1) get the single VENDOR
    const resVendor = await fetch(
      `http://localhost:5000/vendor/?vendor_id=${query.vendor_id}`
    );
    const dataVendor = await resVendor.json();

    // 2) get PRODUCTS of single vendor
    const resProducts = await fetch(
      `http://localhost:5000/productsVendor?vendor_id=${query.vendor_id}`
    );
    const dataProducts = await resProducts.json();

    return { vendor: dataVendor, productsVendor: dataProducts };
  }

  render() {
    const { vendor } = this.props; // decustructing the object
    const { productsVendor } = this.props; // decustructing the object
    console.log(productsVendor);

    return (
      <Layout>
        <div className="shop-intro text-center">
          <img
            src={`../static/images/${vendor.shop_url}-logo.png`}
            width="180px"
          />
          <h1>About {vendor.name}</h1>
          <span className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </span>
        </div>
        <h2 className="text-center">{vendor.name} Products</h2>
        <section className="products-section container">
          {productsVendor.map(product => {
            return (
              <div className="product-container text-center">
                <img
                  src={`../static/images/${product.product_url}.jpg`}
                  width="240px"
                />

                {/* <img src="../static/images/pollen.jpg"/> */}

                <p className="product-name">
                  <strong>{product.name}</strong>
                </p>
                <p>{product.price}€</p>
                <Link
                  as={`${product.product_url}`}
                  href={`/product/?product_id=${product.product_id}`}
                >
                  <a className="product-link">Product</a>
                </Link>
              </div>
            );
          })}
        </section>
        <style jsx>{`
          .shop-intro {
            margin-top: 80px;
          }
          h1 {
            text-transform: uppercase;
            margin-top: 20px;
          }
          h2 {
            margin-top: 60px;
            margin-bottom: 20px;
          }
          .subtitle {
            text-align: center;
            width: 70%;
            margin: 0 auto;
            display: block;
            margin-top: 0px;
            margin-bottom: 80px;
          }
          .products-section {
            display: flex;
            justify-content: space-evenly;
            box-shadow: 0px 0px 100px 0px rgba(12, 5, 5, 0.3);
            margin-top: 30px;
          }
          .product-container {
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .product-container img{
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
          }
          .product-name {
            position: relative;
            top: 15px;
          }
          .product-link {
            background-color: #2d94e5;
            color: #fff;
            border-radius: 4px;
            padding: 8px 20px;
            font-size: 14px;
           
           
          }
          .product-link:hover {
            text-decoration: none;
            background-color: green;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3)

          }
        `}</style>
      </Layout>
    );
  }
}

export default Shop;
