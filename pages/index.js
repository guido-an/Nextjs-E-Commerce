import vendors from "../vendors.json";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";

const Index = props => (
  <Layout>
    {/* show all vendors information */}
    {vendors.data.map(vendor => {
      return (
        <div key={vendor.id}>
          <img src={vendor.logo} width="150px" />
          <h1>{vendor.name}</h1>
          <p>{vendor.description}</p>
          {/* link to relative shop page information */}
          <Link as={`${vendor.shop_url}`} href={`/shop/?id=${vendor.id}`}>
            <a>Vendor page</a>
          </Link> 
        </div>
      );
    })}
    <style jsx>{`
        img{
            padding-top: 40px
        }
        `}

    </style>
  </Layout>
);

export default Index;
