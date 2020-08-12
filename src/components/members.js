import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { node } from "prop-types"

const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Members() {
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
      allMembersXlsxSheet2 {
        edges {
          node {
            name
            year
            description
          }
        }
      }
      allMembersXlsxSheet3 {
        edges {
          node {
            name
            year
            description
          }
        }
      }
      allMembersXlsxSheet4 {
        edges {
          node {
            name
            year
            description
          }
        }
      }
    }
  `)

  return (
    <div>
      <div>
        {data.allMembersXlsxSheet1.edges.map((row, i) => (
          <Card>
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
            <div>{row.node.year}</div>
          </Card>
        ))}
      </div>
      <div>
        {data.allMembersXlsxSheet2.edges.map((row, i) => (
          <Card>
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
            <div>{row.node.year}</div>
        </Card>
        ))}
      </div>
      <div>
        {data.allMembersXlsxSheet3.edges.map((row, i) => (
          <Card>
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
            <div>{row.node.year}</div>
        </Card>
        ))}
      </div>
      <div>
        {data.allMembersXlsxSheet4.edges.map((row, i) => (
          <Card>
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
            <div>{row.node.year}</div>
        </Card>
        ))}
      </div>
    </div>
  )
}
