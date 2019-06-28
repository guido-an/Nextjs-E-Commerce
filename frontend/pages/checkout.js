import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import OrderSummary from "../components/OrderSummary";

export default class checkout extends Component {
  // state = {
  //   name: "",
  //   lastName: "",
  //   address: "",
  //   phone: "",
  //   email: "",

  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.props.calculateTotalPrice(this.props.productsInCart);
  }

  render() {
    return (
      <Layout>
        <section className="container delivery-section">
          <div>
            <h1 className="text-left">Delivery Details</h1>

            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
            <div className="buttons-wrapper">
              {this.props.confirmDetails ? (
                <button
                  className="btn btn-success"
                  onClick={() => this.props.addCustomerDetails(this.state)}
                >
                  Confirm Details
                </button>
              ) : (
                <button
                  className="btn btn-default update-btn"
                  onClick={() => this.props.addCustomerDetails(this.state)}
                >
                  Update Details
                </button>
              )}

              {this.props.proceedToPayment ? (
                <Link href="/payment">
                  <a className="payment-link">Proceed to Payment</a>
                </Link>
              ) : (
                <p />
              )}
            </div>
          </div>

          <OrderSummary page={this.props} />
        </section>

        <style jsx>{`
          .delivery-section{
            margin-top: 80px;
            margin-bottom: 120px
          }
          h1{
            margin-bottom: 20px;
            font-size: 32px !important
          }
       
          
          input {
            display: block;
            margin-bottom: 20px;
            width: 80%;
            height: 40px;
            font-size: 15px;
            padding: 0 20px;
            border-top: none;
            border-left: none
          }
          button{
            font-size: 14px
          }
          .buttons-wrapper{
            margin-top: 60px
          }
          .payment-link{
            background-color: #2d94e5;
            color: #fff;
            border-radius: 4px;
            padding: 8px 10px;
            font-size: 14px;
            width: 120px;
            transition: all 0.3s;
            position: relative;
            top: 2px
        
          }
          .payment-link:hover{
            text-decoration: none
          }
         
          .update-btn{
            border: 1px solid #222;
            margin-right: 20px
          }
         
          @media only screen and (min-width: 1200px) {
            .delivery-section{
           
            display grid;
            grid-template-columns: 2fr 1fr
          }
      

            }
        `}</style>
      </Layout>
    );
  }
}
