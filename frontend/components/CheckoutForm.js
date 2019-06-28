// import React, { Component } from "react";
// import { CardElement, injectStripe } from "react-stripe-elements";
// import axios from "axios"

// class CheckoutForm extends Component {
//   state = {
//     complete: false,
//     productsInCart: this.props.productsInCart,
//     customerDetails: this.props.customerDetails,
//     paymentCompleted: ""
//   };

//   submit = async () => {
//     console.log("checkout form", this.state)
//     try {
//       let { token, error } = await this.props.stripe.createToken({
//         name: "Name",
//       });
     
//       if (error) console.log(error);
//       const data = {
//         tokenId: token.id,
//         productsInCart: this.state.productsInCart
   
//       }
//       let response = await fetch('http://localhost:5000/charge', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//       });
      
//       if (response.ok) {
//         console.log("payment completed");
     
//         this.setState({
//           paymentCompleted: "Payment completed succesfully :)"
//         })
//         this.setState({ complete: true });
//         this.createOrder()
//       }
//     } catch (e) {
//       console.log("this is the error:", e);
//     }
//   };

//   createOrder = () => {
//     axios.post("http://localhost:5000/create-order", {
//            productsInCart: this.props.productsInCart,
//            customerDetails: this.props.customerDetails
//         }).then((order) => {
//       console.log(order)
//     })
//     .catch(err => {
//       console.log(err)
//     })
    
//   }
  

//   render() {
 
//     return (
//       <div className="checkout">
//         <p>Would you like to complete the purchase?</p>
//         <CardElement />
//         <button className="btn btn-success" onClick={this.submit}>Complete Payment</button>fdfd
//         <p>{this.state.paymentCompleted}</p>
//         <style jsx>{`
//           button{
//             margin-top: 40px
//           }
//           .checkout input {
//              background-color: red !important
//             }

//           `}</style>
//       </div>
//     );
//   }
// }

// export default injectStripe(CheckoutForm);

import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios"

class CheckoutForm extends Component {
  state = {
    complete: false,
    productsInCart: this.props.productsInCart,
    customerDetails: this.props.customerDetails,
    paymentCompleted: ""
  };

  submit = async () => {
    console.log("checkout form", this.state)
    try {
      let { token, error } = await this.props.stripe.createToken({
        name: "Name",
      });
     
      if (error) console.log(error);
      const data = {
        tokenId: token.id,
        productsInCart: this.state.productsInCart
   
      }
      let response = await fetch('http://localhost:5000/charge', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        console.log("payment completed");
     
        this.setState({
          paymentCompleted: "Thank you for your purchase! You just received a confirmation email :)"
        })
        this.setState({ complete: true });
        this.createOrder()
      }
    } catch (e) {
      console.log("this is the error:", e);
    }
  };

  createOrder = () => {
    axios.post("http://localhost:5000/create-order", {
           productsInCart: this.props.productsInCart,
           customerDetails: this.props.customerDetails
        }).then((order) => {
      console.log(order)
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  

  render() {
 
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement className="card-element"/>
        <button className="btn btn-success" onClick={this.submit}>Complete Payment</button>
        <p className="payment-completed">{this.state.paymentCompleted}</p>
        <style jsx>{`
          button{
            margin-top: 40px
          }
          .card-element{
            display: none
          }
          .payment-completed{
            margin-top: 40px
          }

          `}</style>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
