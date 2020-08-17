import React from 'react';

import '../styles/footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="Footer">
    {`© ${currentYear}, Built with `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
