import React, { Component } from 'react'

export default class OrderSummary extends Component {
 

    render() {
       
        return (
            <div>
                {/* from this.props.page in relative page (checkout and payment) */}
             <div className="order-summary">
            <h3>Order sumary</h3>
            {this.props.page.productsInCart.map((product, index) => {
              return (
                <div>
                  <span>{product.quantity} x </span>
                  <span>{product.name}: </span>
                  <span>{product.quantity * product.price} €</span>
                
                </div>
              );
            })}
            <p className="total-price">
                    Total price: <span>{this.props.page.totalPriceCart} €</span>
                  </p>
            <h3>Delivery details</h3>
            <p>
              <strong>Name:</strong> {this.props.page.customerDetails.name}
            </p>
            <p>
              <strong>Last Name:</strong> {this.props.page.customerDetails.lastName}
            </p>
            <p>
              <strong>Address:</strong> {this.props.page.customerDetails.address}
            </p>
            <p>
              <strong>Phone:</strong> {this.props.page.customerDetails.phone}
            </p>
            <p>
              <strong>Email:</strong> {this.props.page.customerDetails.email}
            </p>
          </div>
          <style jsx>{`
          .order-summary{
            margin-top: 60px;
            -webkit-box-shadow: 13px 32px 36px 24px hsla(0, 0%, 70%, 0.1);
            padding: 20px
          }
          h3{
            font-size: 20px !important;
            font-weight: 700
          }
          .total-price{
            color: #222 !important;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 40px
          }
          p{
            color: #222 !important
          }
            
          @media only screen and (min-width: 1200px) {
          
          .order-summary{
            margin-top: 20px;
            -webkit-box-shadow: 13px 32px 36px 24px hsla(0, 0%, 70%, 0.1);
            padding: 20px 40px
          }

            }
              `}</style>

            </div>
        )
    }
}

