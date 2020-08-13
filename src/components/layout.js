/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from 'styled-components'
import Footer from './footer'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Master = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

const Container = styled.div`
  margin: 8rem 10rem 0;
  flex: 1 0 auto;

  @media screen and (max-width: 780px){
    margin: 8rem 5rem 0;
  }
  @media screen and (max-width: 590px){
    margin: 4rem 0rem 0;
  }
`;

const Layout = ({bgColor, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Master>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container
          style={{
            // padding: `0 1.0875rem 1.45rem`,
            backgroundColor : bgColor,
          }}
        >
          {children}
        </Container>
        <Footer/>
      </Master>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
