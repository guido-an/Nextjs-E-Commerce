import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import Head from "next/head";
import Layout from '../components/Layout'
import Link from 'next/link'


class Checkout extends Component {
  state = {
    stripe: null,
    productsInCart: this.props.productsInCart,
    customerDetails: this.props.customerDetails,
    
  }


  componentDidMount() {
  console.log("did mount", this.state)
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe("pk_test_6kBZOyTRFwWGyCm4gqzAXxbY00DdIRAzhY") });
      console.log("stripe is ready");
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe("pk_test_6kBZOyTRFwWGyCm4gqzAXxbY00DdIRAzhY") });
      });
    }
  }

 
  render() {
    // this.state.stripe will either be null or a Stripe instance
    // depending on whether Stripe.js has loaded.
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Layout>
        <div>
          <Elements>
            <div>
              
            <CheckoutForm customerDetails={this.state.customerDetails} productsInCart={this.state.productsInCart} />
   
            </div>
          </Elements>
        </div>
        </Layout>
      </StripeProvider>
    );
  }
}

export default Checkout;
