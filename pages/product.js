import Layout from "../components/Layout";

import Link from "next/link";
import React, { Component } from "react";
import vendors from "../vendors.json";
import fetch from  'isomorphic-unfetch'  

// const Products = ({ url }) =>
//   console.log(url.query) || (
//     <Layout>
//       {/* show relative product information - receive url.query.vendor from shop page, so I can access the right vendor in the array  */}
// <img src={vendors.data[url.query.vendor].products[url.query.id].img} />
// <h1>{vendors.data[url.query.vendor].products[url.query.id].name}</h1>
// <p> {vendors.data[url.query.vendor].products[url.query.id].desc}</p>
// <strong>  {vendors.data[url.query.vendor].products[url.query.id].price}</strong>

//     </Layout>
//   );

class Products extends Component {
  
    static getInitialProps({query}) {
        return {query}
    }

  render() {
    console.log(this.props.query)
    return (
      <Layout>
      

    <img src={vendors.data[this.props.query.vendor].products[this.props.query.id].img} width="120px"/>
    <h1>{vendors.data[this.props.query.vendor].products[this.props.query.id].name}</h1> 
    <p>{vendors.data[this.props.query.vendor].products[this.props.query.id].desc}</p> 
    <strong>{vendors.data[this.props.query.vendor].products[this.props.query.id].price}</strong>
        {/* <img src={vendors.data[url.query.vendor].products[url.query.id].img} />
        <h1>{vendors.data[url.query.vendor].products[url.query.id].name}</h1> */}
        {/* <p> {vendors.data[url.query.vendor].products[url.query.id].desc}</p> */}
       
       
     

      </Layout>
    );
  }
}

export default Products;
