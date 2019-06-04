import React from 'react'
import App, { Container } from 'next/app'



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
    let productsInCart = [...this.state.productsInCart, product]
    this.setState({
      productsInCart: productsInCart
    })
  }

  deleteProduct = (name) => {
     console.log(name)
     let productsInCart = this.state.productsInCart.filter(product => {
       return product.name != name
     })
     this.setState({
      productsInCart: productsInCart
     })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
     
      <p>app_js</p>
       <pre>{JSON.stringify(this.state, "\t", 2)}</pre> 
        <Component updateCart={this.updateCart} deleteProduct={this.deleteProduct} {...pageProps} {...this.state} />

      </Container>
    )
  }
}

export default MyApp