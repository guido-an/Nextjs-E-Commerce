import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import Head from "next/head";

class Checkout extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }

  componentDidMount() {
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
        <div>
          <Head>
            <script id="stripe-js" src="https://js.stripe.com/v3/" async />
          </Head>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;
