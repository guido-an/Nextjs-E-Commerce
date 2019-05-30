
import Layout from '../components/Layout'
import vendors from '../vendors.json'

const Shop = ({url}) => console.log(vendors.data) || (
  
   <Layout>

    {/* {vendors.data[0].products.map(product => {
      return <div>
         {product.name}
      </div>
   })}  */}

      <img src={url.query.logo} />
    <h1>{url.query.name}</h1>
       
    </Layout>
)


export default Shop

