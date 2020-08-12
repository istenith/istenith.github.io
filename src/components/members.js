import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Flex = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content:space-around;
    align-items: space-around;
    margin: 0 0 0rem;
    padding: 2rem 0;
    height: 500px;
    
  .title {
    max-width: 250px;
    margin: 2rem 0;
    flex: 0 10 320px;
    margin: 2rem 1rem 1rem;
    background-image:  linear-gradient(0deg,#ff8a00,#e52e71);
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    max-height: 350px;
    color: white;
    border-radius: 20px;
    padding: 0.5rem;
    h1{
      margin-bottom: 0;
    }
  }

  .CardContainer{

    display: flex;
    flex-wrap: nowrap;
    /* width: 100%; */
    /* padding-left: 40px; */
    overflow-x: scroll;
    scrollbar-color: #666 #201c29;
    padding: 2rem 0rem 10px 5rem;
    height: 100%;

    .Card {
      /* border: 3px dashed white; */
      width: 250px;
      margin: 0 -15px 1rem;
      height: 100%;
      max-width: 300px;
      border-radius: 20px;
      text-align: left;
      flex: 0 0 250px;
      padding: 20px;
      overflow: hidden;
      background-color: #2a2e35;
      box-shadow: -16px 0 36px #000;
      position: relative;
      /* transition: transform 0.5s ease-out; */
      transition: 0.4s ease-out;
      left: 0px;
    }
}

.Card:hover {
    transform: translateY(-5%);
    transition: transform 0.5s ease-out;
    transition: 0.2s ease-out;
  }
  .Card:hover~.Card{
    position: relative;
    left: 50px;
    transition: 0.2s ease-out;
  }

  @media screen and (max-width: 1080px) {
    .title{
      writing-mode: vertical-rl;
      /* text-align: right; */
      transform: rotate(180deg);
    }
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
            link
          }
        }
      }
      allMembersXlsxSheet2 {
        edges {
          node {
            name
            description
            link
          }
        }
      }
      allMembersXlsxSheet3 {
        edges {
          node {
            name
            description
            link
          }
        }
      }
      allMembersXlsxSheet4 {
        edges {
          node {
            name
            description
            link
          }
        }
      }
    }
  `)

  return (
    <FlexContainer>
      <Flex>
        <div className="title">
          <h1>Final Year</h1>
        </div>
        <div className="CardContainer">
          {data.allMembersXlsxSheet4.edges.map((row, i) => (
            <Link to={row.node.link} style={{textDecoration: "none"}} target="blank">
              <div className="Card">
                <div>{row.node.name}</div>
                <div>{row.node.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </Flex>

      <Flex>
        <div className="title">
          <h1>Third Year</h1>
        </div>
        <div className="CardContainer">
          {data.allMembersXlsxSheet3.edges.map((row, i) => (
            <Link to={row.node.link} target="blank">
            <div className="Card" style={{textDecoration: "none"}}>
              <div>{row.node.name}</div>
              <div>{row.node.description}</div>
            </div>
          </Link>
          ))}
        </div>
      </Flex>

      <Flex>
        <div className="title">
          <h1>Second Year</h1>
        </div>
        <div className="CardContainer">
          {data.allMembersXlsxSheet2.edges.map((row, i) => (
            <Link to={row.node.link} style={{textDecoration: "none"}} target="blank">
            <div className="Card">
              <div>{row.node.name}</div>
              <div>{row.node.description}</div>
            </div>
          </Link>
          ))}
        </div>
      </Flex>

      <Flex>
        <div className="title">
          <h1>First Year</h1>
        </div>
        <div className="CardContainer">
          {data.allMembersXlsxSheet1.edges.map((row, i) => (
            <Link to={row.node.link} style={{textDecoration: "none"}} target="blank">
            <div className="Card">
              <div>{row.node.name}</div>
              <div>{row.node.description}</div>
            </div>
          </Link>
          ))}
        </div>
      </Flex>
    </FlexContainer>
  )
}
