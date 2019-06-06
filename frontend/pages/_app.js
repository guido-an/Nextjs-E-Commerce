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
     
    ]
  }

  updateCart = (product) => {
    console.log(product)
    let p = {...product}
    p.id = Math.random()
    let productsInCart = [...this.state.productsInCart, p]
    this.setState({
      productsInCart: productsInCart
    })
    console.log(p.id)
  }

  deleteProduct = (id) => { 
     let productsInCart = this.state.productsInCart.filter(product => {
       return product.id != id
     })
     this.setState({
      productsInCart: productsInCart
     })
  }

  increaseProductQuantity = (product) =>{
    console.log(product)
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
      <p>app_js</p>
       <pre>{JSON.stringify(this.state, "\t", 2)}</pre> 
       <Header {...this.state} />
        <Component updateCart={this.updateCart} deleteProduct={this.deleteProduct} {...pageProps} {...this.state} />
      </Container>
    )
  }
}

export default MyApp