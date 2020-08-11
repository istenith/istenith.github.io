import React from "react"
import style from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexDiv = style.div`
    margin-top: 5px 
`
const ProjectPage = () => (
    <Layout>
      <SEO title="Projects" />
      <FlexDiv>
          Hello
      </FlexDiv>
    </Layout>
  )
  
  export default ProjectPage