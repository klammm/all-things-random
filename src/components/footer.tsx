import * as React from "react"

import "../styles/footer.css";

const Footer = (): JSX.Element => (
  <footer className="Footer">
    {`© ${new Date().getFullYear()}, Built with `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
