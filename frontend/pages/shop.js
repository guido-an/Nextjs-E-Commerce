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
        <h1>{vendor.name}</h1>
        <p>{vendor.desc}</p>
        <h2>All the products:</h2>
        {productsVendor.map(product => {
          return (
            <div key={product.product_id}>
              <img src={product.img} width="140px" />
              <p>{product.name}</p>
              <Link href={`/product/?product_id=${product.product_id}`}>
                <a>link</a>
              </Link>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default Shop;
