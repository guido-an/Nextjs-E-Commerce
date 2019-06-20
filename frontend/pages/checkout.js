import React, { Component } from 'react'
import Link from 'next/link'
import Layout from "../components/Layout";


export default class checkout extends Component {
  state = {
    name: "",
    lastName: "",
    address: "",
    phone: "",
    email: ""
  }

 handleChange = (e) => {
   this.setState({
    [e.target.name]: e.target.value
   })
   console.log(this.state)
 }


  render() {
    return (
      <Layout>
   
        <h1>Checkout</h1>
   <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
   <input type="text" placeholder="lastName" name="lastName" onChange={this.handleChange} />
   <input type="text" placeholder="address" name="address" onChange={this.handleChange} />
   <input type="text" placeholder="phone" name="phone" onChange={this.handleChange} />
   <input type="email" placeholder="email" name="email" onChange={this.handleChange} />
        <button onClick={() => this.props.addCustomerDetails(this.state)}>
                     send details
          </button>
          <Link href="/payment"><a>payment </a></Link>
      </Layout>
    )
  }
}
