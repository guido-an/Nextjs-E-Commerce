import Header from './Header'
import Footer from './Footer'
import React, { Component } from "react";
import Head from "next/head";


const Layout = props => (   
    <div>
    <Head>
            <script id="stripe-js" src="https://js.stripe.com/v3/" async />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          </Head>
        {props.children}
        <Footer />
        
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Nunito !important;
        }
        h1 {
          font-weight: 700 !important;
          font-size: 45px !important;
          color: #222 !important;
        }
        p {
          margin-bottom: 10px;
          color: #899095 !important
        }
      `}</style>
     
     
    </div>
)


export default Layout