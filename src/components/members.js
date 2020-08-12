import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export default function Members(){
    const data = graphql`
            query {
                allMembersXlsxMembers{
                    edges{
                        node{
                            name
                            year
                            description
                        }
                    }
                }
            }
        
    `

    return data.allMembersXlsxMembers.edges.map( (node) => {
    <div>{node.name}</div>
    <div>{node.year}</div>
    <div>{node.description}</div>
    })
}