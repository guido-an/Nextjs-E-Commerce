import Header from './Header'
import Footer from './Footer'
import React, { Component } from "react";
import Head from "next/head";


const Layout = props => (   
    <div>
    <Head>
            <script id="stripe-js" src="https://js.stripe.com/v3/" async />
          </Head>
        {props.children}
        <Footer />

    </div>
)


export default Layout