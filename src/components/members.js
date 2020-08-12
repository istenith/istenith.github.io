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
    min-width: 250px;
    margin: 2rem 0;
    margin: 2rem 1rem 1rem;
    background-image:  linear-gradient(0deg,#ff8a00,#e52e71);
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    color: white;
    border-radius: 20px;
    padding: 0.5rem;
    h1{
      margin-bottom: 0;
      width: 100%;
    }
  }

  .CardContainer{

    display: flex;
    flex-wrap: nowrap;
    /* width: 100%; */
    /* padding-left: 40px; */
    overflow-x: scroll;
    scrollbar-color: #666 #201c29;
    padding: 2rem 0rem 10px 3rem;
    height: 100%;

    .Card {
      color: white;
      /* border: 3px dashed white; */
      width: 250px;
      height: 100%;
      margin: 0 -5px 0;
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

      .name{
          font-size: 1.5rem;
          font-family: Montserrat;
          min-height: 90px;
      }

      .description{
          font-size: 1rem;
          font-family: century-gothic,Montserrat;
          margin-top: 10px;
      }
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
      min-width: 80px;
      padding: 1rem;
    }
  }
`

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allMembersXlsxSheet1 (
          sort: { fields: name, order: ASC }
      ){
        edges {
          node {
            name
            description
            link
          }
        }
      }
      allMembersXlsxSheet2 (
        sort: { fields: name, order: ASC }
      ){
        edges {
          node {
            name
            description
            link
          }
        }
      }
      allMembersXlsxSheet3 (
        sort: { fields: name, order: ASC }
      ){
        edges {
          node {
            name
            description
            link
          }
        }
      }
      allMembersXlsxSheet4 (
        sort: { fields: name, order: ASC }
      ){
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
                <div className="name">{row.node.name}</div>
                <div className="description">{row.node.description}</div>
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
              <div className="name">{row.node.name}</div>
              <div className="description">{row.node.description}</div>
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
              <div className="name">{row.node.name}</div>
              <div className="description">{row.node.description}</div>
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
              <div className="name">{row.node.name}</div>
              <div className="description">{row.node.description}</div>
            </div>
          </Link>
          ))}
        </div>
      </Flex>
    </FlexContainer>
  )
}
