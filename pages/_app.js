import React from 'react'
import App, { Container } from 'next/app'
import CartComponent from "../components/CartComponent";
import AddToCartComponent from '../components/AddToCartComponent';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    ninjas: [

    ]
  }

  addNinja = (ninja) => {
     console.log(ninja)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
      <p>app_js</p>
     
       <pre>{JSON.stringify(this.state, "\t", 2)}</pre> 
        <Component {...pageProps} {...this.state} />
       <AddToCartComponent addNinja={this.addNinja}/>
      </Container>
    )
  }
}

export default MyApp