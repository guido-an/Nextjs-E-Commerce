import Link from "next/link";

const Header = props => (
  <header className="container">
    <section className="header-wrapper">
      <div className="logo">
        {/* <img src="../static/images/faces-and-places-logo.png" width="160px"/> */}
<Link href="/"><h3>Logo</h3></Link>
        
      </div>
      <div className="menu text-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#faq">
          <a>Faq</a>
        </Link>
        <Link href="#contact">
          <a>Contact Us</a>
        </Link>
      </div>

      <div className="right-section">
        <Link href="/cart">
          <a>
            <img src="/static/images/shopping-cart.png" width="32px" />{" "}
            <span className="number-of-products">
              {props.productsInCart.length}
            </span>
          </a>
        </Link>
        <Link href="/contact">
          <a className="start-selling text-center">Start Selling</a>
        </Link>
      </div>
    </section>

    <style jsx>{`
      header {
        margin-top: 20px;
        height: 90px;
        -webkit-box-shadow: 13px 32px 36px 24px hsla(0, 0%, 70%, 0.1);
        border-radius: 4px
      }
      .header-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 30px;
      }
      .right-section {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
        margin-right: 20px;
      }

      .menu {
        display: none;
        position: relative;
        bottom: 5px
      }

      .logo {
        position: relative;
        left: 20px;
      }
      .logo:hover{
        cursor: pointer
      }
      .menu a {
        color: #777;
        padding: 10px 20px;
      }
      .menu a:hover {
        cursor: pointer;
        color: #fff;
        background-color: #2d94e5;
        border-radius: 4px
      }

      a:hover {
        text-decoration: none;
      }

      .start-selling {
        background-color: #2d94e5;
        color: #fff;
        border-radius: 4px;
        padding: 8px 10px;
        font-size: 14px;
        width: 120px;
        transition: all 0.3s;
        position: relative;
        left: 20px;
      }
      .start-selling:hover {
        transform: scale(1.1);
      }
      .number-of-products {
        font-weight: 800;
        position: relative;
        top: 2px;
        left: 2px;
        font-size: 18px;
        color: #222;
      }

      @media only screen and (min-width: 1200px) {
        .header-wrapper {
          grid-template-columns: 1fr 2fr 1fr;
        }
        .menu {
          display: block;
          
        }

        .menu a {
          display: inline-block;
          margin: 0 10px;
        }
      }
    `}</style>
  </header>
);

export default Header;
