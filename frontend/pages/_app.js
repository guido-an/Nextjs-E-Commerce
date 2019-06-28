import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'




class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    productsInCart: [
     
    ],
    customerDetails: {
      name: "",
      lastName: "",
      address: "",
      phone: "",
      email: ""
    },
    viewCart: false,
    totalPriceCart: 0,
    proceedToPayment: false,
    confirmDetails: true
  }


  calculateTotalPrice = array => {
    let totalPricesArray = [];
    array.forEach(product => {
      let productPrice = parseInt(product.price) * product.quantity;
      totalPricesArray.push(productPrice);
    });
    let totalPriceCart = totalPricesArray.reduce((a, b) => a + b, 0);
    this.setState({
      totalPriceCart: totalPriceCart
    });
  };

  updateCart = (product) => {
   
    for (var i = 0; i < this.state.productsInCart.length; i++) {
      if (this.state.productsInCart[i].name == product.name) {
        alert("Product already in cart")
      
        this.state.productsInCart.pop(product)
      } 
    }

    let p = {...product}
    p.id = Math.random()
    let productsInCart = [...this.state.productsInCart, p]
    this.setState({
      productsInCart: productsInCart,
      viewCart: true
    })
    setTimeout(() => { 
      this.setState({
        viewCart: false
      })
    }, 5000);
  }

  deleteProduct = (id) => { 
     let productsInCart = this.state.productsInCart.filter(product => {
       return product.id != id
     })
     this.setState({
      productsInCart: productsInCart,
     })
  }


  addCustomerDetails = (details) => {
    this.setState({
      customerDetails: details,
      proceedToPayment: true,
      confirmDetails: false
    })

  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
       <Header {...this.state} />
        <Component calculateTotalPrice={this.calculateTotalPrice} addCustomerDetails={this.addCustomerDetails} updateCart={this.updateCart} deleteProduct={this.deleteProduct} {...pageProps} {...this.state} />
      </Container>
    )
  }
}

export default MyApp