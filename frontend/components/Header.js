import Link from "next/link";
const Header = props => (
  <header className="container">
    <div className="logo">
      {/* <img src="../static/images/faces-and-places-logo.png" width="260px"/> */}
      <h3>Logo</h3>
    </div>
    <div className="menu text-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="#">
        <a>About</a>
      </Link>
      <Link href="#">
        <a>Faq</a>
      </Link>
      <Link href="#">
        <a>Contact Us</a>
      </Link>
    </div>

    <div className="right-section">
      <Link href="/cart">
        <a>
          <img src="../static/images/shopping-cart.png" width="32px" />{" "}
          <span>{props.productsInCart.length}</span>
        </a>
      </Link>
      <Link href="/contact">
        <a className="start-selling text-center">Start Selling</a>
      </Link>
    </div>

    <style jsx>{`
      header {
        margin-top: 20px;
        height: 90px;
        -webkit-box-shadow: 13px 32px 36px 24px hsla(0, 0%, 70%, 0.1);
        
      }
      .right-section {
        display: flex;
        justify-content: flex-end;
        position: relative;
        bottom: 10px;
        right: 20px;
      }
      .menu{
        display: none
      }
     
      .logo {
        position: relative;
        top: 30px;
        left: 20px;
      }

      a {
        color: #777;
      }
      a:hover {
        text-decoration: none;
      }

      .start-selling {
        background-color: #2D94E5;
        color: #fff;
        border-radius: 4px;
        padding: 8px 10px;
        font-size: 14px;
        width: 120px;
        transition: all 0.3s;
        position: relative;
        left: 20px
      }
      .start-selling:hover {
        transform: scale(1.1);
      }

      @media only screen and (min-width: 1200px) {
        .menu {
        position: relative;
        bottom: 5px;
        display: block
      }

      .menu a {
        display: inline-block;
        margin: 0 20px;
      }
      .right-section {
        
        bottom: 35px;
      
      }
           
          }
    `}</style>
  </header>
);

export default Header;
