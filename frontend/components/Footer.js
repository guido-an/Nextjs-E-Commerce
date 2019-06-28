import Link from "next/link";
const Footer = props => (
  <footer className="container">
    <section className="container footer-container">
      <div>
        <h3>Logo</h3>
        <img
          className="cards-logo"
          src="../static/images/cards-logo.png"
          width="120px"
        />
      </div>
      <div className="contact">
        <strong className="footer-title">Get In Touch</strong>
        <div className="contact-wrapper">
          <div>
            <img src="../static/images/mail.png" width="20px" />
            <span>info@localvendors.com</span>
          </div>
          <div>
            <img src="../static/images/smartphone.png" width="20px" />
            <span>0479 95 69 24</span>
          </div>
          <div>
            <img src="../static/images/placeholder.png" width="20px" />
            <span>Strawinskylaan 3101, Amsterdam</span>
          </div>
        </div>
      </div>
      
      <div className="footer-section popular-products">
        <strong className="footer-title">Most Popular Products</strong>
        <Link>
          <a>Pollen</a>
        </Link>
        <Link>
          <a>Chestnut Honey</a>
        </Link>
        <Link>
          <a>Sea Fennel</a>
        </Link>
        <Link>
          <a>Rosso Conero</a>
        </Link>
      </div>
      
      <div className="credits">
        <strong className="footer-title">Credits</strong>

        <span>Guido Carucci </span>
        <div>
          <a href="https://github.com/guido-an" target="_blank">
            <img src="../static/images/GitHub-Mark.png" width="26px" />
          </a>
          <a href="https://www.linkedin.com/in/guido-carucci-11049710b/" target="_blank">
            <img src="../static/images/linkedin-logo.png" width="32px" />
          </a>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        footer {
          position: relative;
          bottom: 0;
          background-color: #fff;
          padding:80px 0;
          border-top: 2px solid #fafafa
       
        }
        .footer-container{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          position: relative;
          left: 40px
        }
        .cards-logo{
          position relative;
          right: 5px;
          top:5px
        }
      
        .contact-wrapper span {
         position: relative;
         top: 2px;
         left: 8px
        }
        .popular-products a{
         display: block
        }
        .footer-title{
          margin-top: 40px;
          display: block
        }
        .credits img{
          display: inline-block
        }
        
        @media only screen and (min-width: 768px) {
          .footer-container{
          justify-content: space-between;
          flex-direction: row;
          left: 0
        }
        .footer-container {
          
        }
          .contact-wrapper{
         display: flex;
         flex-direction: column;
         line-height: 200%
       }
       .footer-title{
          margin-top: 0px;
        
        }
          }
      `}
    </style>
  </footer>
);

export default Footer;
