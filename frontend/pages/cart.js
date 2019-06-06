import React, { Component } from "react";
import Layout from "../components/Layout";

class Cart extends Component {
  state = {
    totalPriceCart: 0
  };

  // caluclate totalPriceCart
  componentDidMount() {
    let totalPricesArray = [];
    this.props.productsInCart.forEach(product => {
      let productPrice = parseInt(product.price) * product.quantity;

      totalPricesArray.push(productPrice);
    });
    let totalPriceCart = totalPricesArray.reduce((a, b) => a + b, 0);
    

    this.setState({
      totalPriceCart: totalPriceCart
    });
    console.log("component did mount")
  }

// if a product is removed update totalPriceCart
componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
    let totalPricesArray = [];
    this.props.productsInCart.forEach(product => {
      let productPrice = parseInt(product.price) * product.quantity;

      totalPricesArray.push(productPrice);
    });
    let totalPriceCart = totalPricesArray.reduce((a, b) => a + b, 0);
    
    this.setState({
      totalPriceCart: totalPriceCart
    });
}
    console.log("component did update")
}


  render() {
    return (
      <Layout>
        {this.props.productsInCart.length > 0 ? (
            <div>
                
         {this.props.productsInCart.map((product, index) => {
           return <div index={product.id}>
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
         })}
         <h2>Total Price Cart: {this.state.totalPriceCart}€</h2>
            </div>
        
        ) : (
          <p>no product in cart</p>
        )}
      </Layout>
    );
  }
}

export default Cart;
