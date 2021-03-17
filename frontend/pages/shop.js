import Layout from '../components/Layout'
import Link from 'next/link'
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class Shop extends Component {
  static async getInitialProps ({ query }) {
    // 1) get the single VENDOR
    const resVendor = await fetch(
      `http://localhost:5000/vendor/?vendor_id=${query.vendor_id}`
    )
    const dataVendor = await resVendor.json()

    // 2) get PRODUCTS of single vendor
    const resProducts = await fetch(
      `http://localhost:5000/productsVendor?vendor_id=${query.vendor_id}`
    )
    const dataProducts = await resProducts.json()

    return { vendor: dataVendor, productsVendor: dataProducts }
  }

  render () {
    const { vendor } = this.props // decustructing the object
    const { productsVendor } = this.props // decustructing the object
    console.log(productsVendor)

    return (
      <Layout>
        <div className='shop-intro text-center'>
          <img
            src={`/static/images/${vendor.shop_url}-logo.png`}
            width='180px'
          />
          <h1>About <span>{vendor.name}</span></h1>
          <div className='divider' />
          <span className='subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </span>
        </div>

        <section className='products-section container-fluid'>
          {productsVendor.map(product => {
            return (
              <div className='product-container text-center'>
                <Link
                  as={`/${product.product_url}`}
                  href={`/product/?product_id=${product.product_id}`}
                ><a>
npm
                    <img
                    src={`/static/images/${product.product_url}.jpg`}
                    width='340px'
                  />
                 </a>
                </Link>

                {/* <img src="../static/images/pollen.jpg"/> */}

                <p className='product-name'>
                  <strong>{product.name}</strong>
                </p>
                <p>{product.price}€</p>
                <Link
                  as={`/${product.product_url}`}
                  href={`/product/?product_id=${product.product_id}`}
                >
                  <a className='product-link'>PRODUCT</a>
                </Link>
              </div>
            )
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
          h1 span{
            color: #2d94e5
          }
          h2 {
            margin-top: 80px;
            margin-bottom: 20px;
          }
          .divider{
            border-top: 2px solid #f7f7f7;
            width: 120px;
            margin: 0 auto;
            
          }
          .subtitle {
            text-align: center;
            width: 80%;
            margin: 0 auto;
            display: block;
            margin-top: 20px;
            margin-bottom: 80px;
            color: #777
          
          }
          .products-title{
            text-transform: uppercase;
            font-size: 26px;
            font-weight: 600
          }
          .products-section {
            margin-top: 30px;
          }
          .product-container {
            margin-top: 40px;
            margin-bottom: 20px;
           
          }
          .product-container img {
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s
           
          }
          .product-container img:hover{
            transform: scale(1.1);
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
          }
          .product-name {
            position: relative;
            top: 15px;
            color: #222 !important;
            font-size: 20px
          }
          .product-link {
            background-color: #2d94e5;
            color: #fff;
            border-radius: 4px;
            padding: 8px 20px;
            font-size: 14px;
            width: 120px;
            display: block;
            margin: 0 auto;
            transition: all 0.3s
          }
          .product-link:hover {
            text-decoration: none;
            background-color: green;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
            transform: scale(1.1)
          }

          @media only screen and (min-width: 768px) {
            .products-section {
              display: flex;
              justify-content: space-evenly;
              box-shadow: 13px 0px 36px 14px rgba(0, 0, 0, 0.2);
              width: 95%;
              margin-bottom: 80px;
              padding-bottom: 60px;
              border-radius: 4px
            }
            .subtitle{
              width: 50%
            }
          }
        `}
        </style>
      </Layout>
    )
  }
}

export default Shop
