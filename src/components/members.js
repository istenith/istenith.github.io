import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  height: 250px;
  scrollbar-color: #666 #201c29;
  margin: 20px 0 20px;
  width: 100%;

  .Card {
    height: 100%
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 5px 2px 5px;
    background-color: #2a2e35;
    border-radius: 10px;
    width: 50%;
  }
`

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allMembersXlsxSheet1 {
        edges {
          node {
            name
            description
          }
        }
      }
      allMembersXlsxSheet2 {
        edges {
          node {
            name
            description
          }
        }
      }
      allMembersXlsxSheet3 {
        edges {
          node {
            name
            description
          }
        }
      }
      allMembersXlsxSheet4 {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)

  return (
    <div>
      <Flex>
        <div className="year">First</div>
        {data.allMembersXlsxSheet1.edges.map((row, i) => (
          <div className="Card">
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
          </div>
        ))}
      </Flex>

      <Flex>
        <div className="year">Second</div>
        {data.allMembersXlsxSheet2.edges.map((row, i) => (
          <div className="Card">
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
          </div>
        ))}
      </Flex>

      <Flex>
        <div className="year">Third</div>
        {data.allMembersXlsxSheet3.edges.map((row, i) => (
          <div className="Card">
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
          </div>
        ))}
      </Flex>

      <Flex>
        <div className="year">Final</div>   
        {data.allMembersXlsxSheet4.edges.map((row, i) => (
          <div className="Card">
            <div>{row.node.name}</div>
            <div>{row.node.description}</div>
          </div>
        ))}
      </Flex>
    </div>
  )
}
