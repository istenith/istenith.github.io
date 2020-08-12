import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Members from "../components/members"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column
`

export default function Member(){
    return(
        <Layout>
            <SEO title="Members"/>
                <Members></Members>
        </Layout>
    )
}