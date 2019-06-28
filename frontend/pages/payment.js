import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import OrderSummary from "../components/OrderSummary";

class Checkout extends Component {
  state = {
    stripe: null,
    productsInCart: this.props.productsInCart,
    customerDetails: this.props.customerDetails
  };

  componentDidMount() {
    console.log("did mount", this.props);
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe("pk_test_6kBZOyTRFwWGyCm4gqzAXxbY00DdIRAzhY")
      });
      console.log("stripe is ready");
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe("pk_test_6kBZOyTRFwWGyCm4gqzAXxbY00DdIRAzhY")
        });
      });
    }
  }

  render() {
    // this.state.stripe will either be null or a Stripe instance
    // depending on whether Stripe.js has loaded.
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Layout>
          <section className="container payment-container">
         
            <div>
            <h1>Complete Payment</h1>
              <Elements>
                <div>
                  <CheckoutForm
                    customerDetails={this.state.customerDetails}
                    productsInCart={this.state.productsInCart}
                  />
                </div>
              </Elements>
            </div>
            {/* passing the props to OrderSummary component */}
            <OrderSummary page={this.props} />
          </section>
          <style jsx>{`
            .payment-container {
              display: grid;
              grid-template-columns: 2fr 1fr;
              margin-top: 80px;
              margin-bottom: 120px;
            }
            
            h1{
            margin-bottom: 20px;
            font-size: 32px !important
          }
          
            h3 {
              font-size: 20px !important;
              font-weight: 700;
            }
           
            
          `}</style>
        </Layout>
      </StripeProvider>
    );
  }
}

export default Checkout;
