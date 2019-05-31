import Layout from "../components/Layout";
import vendors from "../vendors.json";
import Link from 'next/link'

const Shop = ({ url }) =>
  console.log(vendors.data) || (
    <Layout>
      {/* show relative vendor information */}
      <h1>{vendors.data[url.query.id].name}</h1>
      <p>{vendors.data[url.query.id].desc}</p> 

      <h2>All the products:</h2>
      {/* show products information */}
      {vendors.data[url.query.id].products.map(product => { 
        return (
          <div key={product.id}>
            <img src={product.img} width="140px" /> {product.name}:
            {product.price}
             {/* link to product page, I am passing down the id of the product and the id of the relaitve vendor 'url.query.id' */}
            <Link as={`/${product.product_url}`} href={`/product/?vendor=${url.query.id}&id=${product.id}`}><a>link</a></Link>
          </div>
        );
      })}
    </Layout>
  );

export default Shop;
