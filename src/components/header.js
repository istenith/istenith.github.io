import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.scss"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333538` ,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 >
        <Link
          to="/"
          style={{ margin: 0, color: 'white', textShadow:'none' }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
