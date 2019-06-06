import React, { Component } from "react";
import Layout from "../components/Layout";

class Cart extends Component {
  state = {
    totalPriceCart: 0
  };

  componentDidMount() {
    let totalPriceArray = [];

    this.props.productsInCart.forEach(product => {
      let productPrice = parseInt(product.price) * product.quantity;

      totalPriceArray.push(productPrice);
    });
    let totalPriceCart = totalPriceArray.reduce((a, b) => a + b, 0);
    console.log(totalPriceCart);

    this.setState({
      totalPriceCart: totalPriceCart
    });
  }

  render() {
    return (
      <Layout>
        <pre>{JSON.stringify(this.state.totalPriceCart)}</pre>
        {this.props.productsInCart.map((product, index) => {
          return (
            <div index={product.id}>
              <p>
                <strong>Product:</strong>
                {product.name}
              </p>
              <p>
                <strong>Quantity:</strong>
                {product.quantity}
              </p>
              <p>
                <strong>Total: </strong>
                {product.quantity * parseInt(product.price)}€
              </p>

              <button onClick={() => this.props.deleteProduct(product.id)}>
                remove product
              </button>
            </div>
          );
        })}
        <h2>Total Price Cart: {this.state.totalPriceCart}</h2>
      </Layout>
    );
  }
}

export default Cart;
