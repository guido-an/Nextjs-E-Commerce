import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends Component {
  state = {
    complete: false
  };

  submit = async () => {
    try {
      let { token, error } = await this.props.stripe.createToken({
        name: "Name",
      });
     
      if (error) console.log(error);
      const data = {
        tokenId: token.id
        // products: [{id: , qty: 1}, ]
        // amount: 1000
      }
      let response = await fetch('http://localhost:5000/charge', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        console.log("payment completed");
        this.setState({ complete: true });
      }
    } catch (e) {
      console.log("this is the error:", e);
    }
  };

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
