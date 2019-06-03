import Header from './Header'
import Footer from './Footer'
import React, { Component } from "react";


const Layout = props => (   
    <div>
        <Header />
        {props.children}
        <Footer />

    </div>
)


export default Layout