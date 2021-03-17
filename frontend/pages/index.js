import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import React, { Component } from 'react'

class Index extends Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:5000/vendors') // get the vendors API from backend routes/index.js
    const data = await res.json() // store the result
    return { vendors: data } // return the result
  }

  render () {
    const { vendors } = this.props // decustructing the object

    return (
      <Layout>
        {/* show all vendors information */}
        <section className='title-hero container text-center'>
          {/* <h3>Lorem. Ipsum. Doloret.</h3> */}
          <h1>
          Where Local <span> Vendors</span> Meet
            <div className='divider' />

          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <div className='vendors-wrapper container-fluid'>
          {vendors.map(vendor => {
            const backgroundImage = {
              // backgroundImage: `url('/static/images/${vendor.shop_url}.jpeg')`,
              backgroundRepeat: 'no-repeat',
              height: '400px',
              backgroundSize: 'cover',
              background: `linear-gradient( to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url('/static/images/${
                vendor.shop_url
              }.jpg')`
            }

            return (
              <div
                key={vendor.vendor_id}
                className='vendor-box text-center'
                style={backgroundImage}
              >
                <div className='vendor-box-title'>
                  <h2>{vendor.name}</h2>

                  {/* link to relative shop page information */}
                  <Link
                    as={`/${vendor.shop_url}`}
                    href={`/shop/?vendor_id=${vendor.vendor_id}`}
                  >
                    <a>> Vendor Shop</a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <style jsx>
          {`
            h1 {
              text-transform: uppercase;
              padding: 5px;

            }
         
            h2 {
             
              font-weight: 700;
              text-align: center;
              margin-top: 280px;
              padding-top: 10px;
          
            }
            h3 {
              font-size: 18px;
              color: #899095;
              position: relative;
              top: 10px;
              font-weight: 600;
            }

            .vendors-wrapper {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin-top: 20px;
              margin-bottom: 120px;
              box-shadow: 13px -50px 36px 14px rgba(0, 0, 0, 0.1);
              padding-top: 40px;
              padding-bottom:80px;
              width: 95%;
              border-radius: 4px
            }
            .divider{
            border-top: 3px solid #f7f7f7;
            width: 180px;
            margin: 10px auto;
            
          }
            .vendor-box {
              margin: 8px;
              width: 100%;
              border-radius: 4px;
              box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
              color: black;
              
            }
          
            .vendor-box-title {
              background-color: #fff;
              opacity: 0.8;
              color: #222
            }
           
           .vendor-box-title a{
             color: #222 !important;
             display: inline-block;
             padding-bottom: 20px
           }

            .title-hero {
              margin-top: 120px;
              padding: 40px;
            }
       
          
            .title-hero span {
              color: #2d94e5;
            }
            .title-hero p {
              width: 60%;
              margin: 0 auto;
             
            }

            a {
              color: # color: black;;
            }
            a:hover {
              text-decoration: none;
            }

            @media only screen and (min-width: 1200px) {
              h1{
                width: 80%;
              margin: 0 auto;
              }
              .vendor-box {
                width: 30%;
              }
            }
          `}
        </style>
      </Layout>
    )
  }
}

export default Index
