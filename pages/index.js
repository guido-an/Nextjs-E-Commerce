import vendors from '../vendors.json'
import fetch from  'isomorphic-unfetch'  
import Link from 'next/link'
import Layout from '../components/Layout'


const Index = (props) =>  (
       <Layout>

           
           {vendors.data.map(vendor => {
             
               return <div key={vendor.id}>
                   <img src={vendor.logo} />
                   <h1>{vendor.name}</h1>
                  <p>{vendor.description}</p> 
                  <Link as={`${vendor.shop_url}`} href={`/shop/?name=${vendor.name}&desc=${vendor.desc}&logo=${vendor.logo}`}><a>Vendor page</a></Link>
               </div>
           })}
           </Layout>
)

export default Index 