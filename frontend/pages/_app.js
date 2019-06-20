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
    }
  }

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
      productsInCart: productsInCart
    })

    console.log(p.id)
    console.log("app state", this.state.productsInCart)
  

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
      customerDetails: details
    })
    console.log("app", details)
  }

  
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
      <p>app_js</p>
       <pre>{JSON.stringify(this.state, "\t", 2)}</pre> 
       <Header {...this.state} />
        <Component totalPrice={this.totalPrice} addCustomerDetails={this.addCustomerDetails} updateCart={this.updateCart} deleteProduct={this.deleteProduct} {...pageProps} {...this.state} />
      </Container>
    )
  }
}

export default MyApp