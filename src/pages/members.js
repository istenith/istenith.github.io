import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Members from "../components/members"


export default function Member(){
    return(
        <Layout>
            <SEO title="Members"/>
                <Members></Members>
        </Layout>
    )
}