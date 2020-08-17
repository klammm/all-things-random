import React from 'react';

import '../styles/footer.css';

const Footer = () => (
  <footer className="Footer">
    ©&nbsp;
    {new Date().getFullYear()}
    , Built with &nbsp;
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
