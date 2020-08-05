import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.scss"
import React from "react"

export default function Header(){
   return ( 
    <nav>
      <h3 className="logo"><Link to="/" className={styles.link}>ISTE NITH</Link></h3>
      <ul className={styles.nav_links}>
        <li><Link to="/" className={styles.link} activeClassName={styles.link_active}>Projects</Link></li>
        <li><Link to="/404" className={styles.link} activeClassName={styles.link_active}>Initiatives</Link></li>
        <li><Link to="/" className={styles.link} activeClassName={styles.link_active}>Members</Link></li>
        <li><Link to="/" className={styles.link} activeClassName={styles.link_active}>Alumni</Link></li>
        <li><Link to="/about" className={styles.link} activeClassName={styles.link_active}>About Us</Link></li>
      </ul>
      <div className={styles.burger}>
        <div className={styles.line1}></div>
        <div className={styles.line1}></div>
        <div className={styles.line1}></div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
