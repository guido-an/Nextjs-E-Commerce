import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class Test extends Component {
  // static async getInitialProps() {

  //     const res = await fetch('http://localhost:5000/vendors')

  //     const vendors = await res.json()
  //       console.log(vendors)
  //       return { vendors: vendors }
  //  }

  static async getInitialProps() {
    const res = await fetch("http://localhost:5000/vendors");  // get the vendors API from backend index.js
    const data = await res.json();  // store the result 
    return { vendors: data }; // return the result
  }

  render() {
      
     const { vendors } = this.props; // decustructin the object 
 
     {console.log(vendors)}

     
    return (
        <div>
            {vendors.map(vendor => {
                return vendor.name
            })}
        </div>
    )
  }
}
