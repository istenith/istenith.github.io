import React from "react"
import { graphql,useStaticQuery } from "gatsby"

export default function Members(){
    const data = useStaticQuery(graphql`
    query {
        allMembersXlsxSheet1 {
          edges {
            node {
              name
              year
              description
            }
          }
        }
      }
        
    `
)

    return data.allMembersXlsxSheet1.edges.map( (row,i) => (
    <div>
        <div>{ row.node.name}</div>
        <div>{ row.node.year}</div>
        <div>{ row.node.description}</div>
    </div>
    ))
}

