import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header-container">
      <h1 className="Header-title">
        <Link to="/" className="Header-titleText">
          {siteTitle}
        </Link>
      </h1>
      <ul className="Header-tableOfContents">
        <Link to="/about">
          <li className="Header-links">About</li>
        </Link>
        <Link to="/blog">
          <li className="Header-links">Blog</li>
        </Link>
        <Link to="/twitch">
          <li className="Header-links">Twitch</li>
        </Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

Header.displayName = "Header"

export default Header
