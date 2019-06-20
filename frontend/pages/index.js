import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";
import React, { Component } from "react";



class Index extends Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:5000/vendors"); // get the vendors API from backend routes/index.js
    const data = await res.json(); // store the result
    return { vendors: data }; // return the result
  }

  render() {
    const { vendors } = this.props; // decustructing the object
    return (
      <Layout>
        {/* show all vendors information */}
        {vendors.map(vendor => {
          return (
            <div key={vendor.vendor_id}>
              <img src={vendor.logo} width="150px" />
              <h1>{vendor.name}</h1>
              <p>{vendor.description}</p>
              {/* link to relative shop page information */}
              {/* <Link as={`${vendor.shop_url}`} href={`/shop/?vendor_id=${vendor.vendor_id}`}> */}
              <Link href={`/shop/?vendor_id=${vendor.vendor_id}`}>
                <a>Vendor page</a>
              </Link>
            </div>
          );
        })}
        <style jsx>
          {`
            img {
              padding-top: 40px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
