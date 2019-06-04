
import Link from 'next/link'
const Header = (props) => (
  <header>
  
  
   <Link href="/cart"><a> products in cart: {props.productsInCart.length}</a></Link>
   <Link href="/"><a>back to shop</a></Link>
   
    <style jsx>{`
      background-color: #f7f7f7;
      padding: 40px;
    `}</style>
  </header>
);

export default Header;
