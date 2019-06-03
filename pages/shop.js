// import Layout from "../components/Layout";
// import vendors from "../vendors.json";
// import Link from 'next/link'

// const Shop = ({ url }) =>
//   console.log(url) || (
//     <Layout>
//       {/* show relative vendor information */}
//       <h1>{vendors.data[url.query.vendor_id].name}</h1>
//       <p>{vendors.data[url.query.vendor_id].desc}</p>

//       <h2>All the products:</h2>
//       {/* show products information */}
//       {vendors.data[url.query.vendor_id].products.map(product => {
//         return (
//           <div key={product.id}>
//             <img src={product.img} width="140px" /> {product.name}:
//             {product.price}
//              {/* link to product page, I am passing down the id of the product and the id of the relaitve vendor 'url.query.id' */}
//             <Link as={`/${product.product_url}`} href={`/product/?vendor_id=${url.query.vendor_id}&product_id=${product.product_id}`}><a>link</a></Link>
//           </div>
//         );
//       })}
//     </Layout>
//   );


import Layout from "../components/Layout";
import vendors from "../vendors.json";
import Link from "next/link";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class Shop extends Component {
  static getInitialProps({query}) {
  console.log(query) 
  return { query };
  }

  render() {
    console.log(this.props.query)

  return <Layout>shop page
    <h1>{vendors.data[this.props.query.vendor_id].name}</h1> 
    <p>{vendors.data[this.props.query.vendor_id].desc}</p>

    <h2>All the products:</h2>
       {/* show products information */}
     {vendors.data[this.props.query.vendor_id].products.map(product => {
        return (
          <div key={product.id}>
            <img src={product.img} width="140px" /> {product.name}:
            {product.price}
             {/* link to product page, I am passing down the id of the product and the id of the relaitve vendor 'this.props.query.id' */}
            {/* <Link as={`/${product.product_url}`} href={`/product/?vendor_id=${this.props.query.vendor_id}&product_id=${product.product_id}`}><a>link</a></Link> */}
            <Link href={`/product/?vendor_id=${this.props.query.vendor_id}&product_id=${product.product_id}`}><a>link</a></Link>
          </div>
        );
      })}
   
  </Layout>;
  }
  }

export default Shop;
