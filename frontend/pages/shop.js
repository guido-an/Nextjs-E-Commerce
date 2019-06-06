import Layout from "../components/Layout";
import vendors from "../vendors.json";
import Link from "next/link";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class Shop extends Component {
  static async getInitialProps({ query }) {
    
    // get the vendors API from backend index.js
    const res = await fetch(
      `http://localhost:5000/vendor/?vendor_id=${query.vendor_id}`
    ); 
    const data = await res.json();
    // return the result and the query object
    return { vendor: data, query }; 
  }

  render() {
    const { vendor } = this.props; // decustructing the object

    return (
      <Layout>
        <h1>{vendor.name}</h1>
        <p>{vendor.desc}</p>

        <h2>All the products:</h2>
        {vendor.products.map(product => {
          return (
            <div>
              <img src={product.img} width="140px" />
              <p>{product.price}</p>
              <Link
                href={`/product/?vendor_id=${
                  this.props.query.vendor_id
                }&product_id=${product.product_id}`}
              >
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
