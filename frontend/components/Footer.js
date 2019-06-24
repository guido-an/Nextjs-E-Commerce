const Footer = props => (
  <footer>
    @copyright {new Date().getFullYear()}
    <style jsx>
      {`
        footer {
          position: relative;
          bottom: 0;
          background-color: #f7f7f7;
          padding: 40px;
         
        }
      `}
    </style>
  </footer>
);

export default Footer;
