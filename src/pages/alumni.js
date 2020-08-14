import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Alumni from "../components/alumni"


export default function AlumniPage(){
    return(
        <Layout>
            <SEO title="Alumni"/>
                <Alumni></Alumni>
        </Layout>
    )
}