import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content:space-around;
  align-items: space-around;
  margin: 0 0 0rem;
  padding: 2rem 0;

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
      margin: 0 0 10px 0;
      color:white;
    }
    .more{
        color: #2a2e35;
        margin: 0 0 10px 0;
        text-align:start;
      }
  }

  .CardContainer {
    display: flex;
    flex-wrap: nowrap;
    /* width: 100%; */
    /* padding-left: 40px; */
    overflow-x: scroll;
    scrollbar-color: #666 #201c29;
    padding: 2rem 0rem 10px 5rem;;

    .Card {
      /* border: 3px dashed white; */
      width: 250px;
      margin: 0 -25px 1rem;
      max-height: 350px;
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

      .ProjTitle {
        color: white;
        margin-top: 1.0rem;
      }
      .Date,
      .Excerpt {
        color: white;
      }

      .UnderlineMagical {
          background-image: linear-gradient(120deg, #e52f6e 0%, #fe8702 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.2em;
          background-position: 0 88%;
          transition: background-size 0.25s ease-in;
      }
    }
  }

    .Card {
      margin: 0 1rem 1rem;
    }
    .Card:hover {
      transform: translateY(-5%);
      transition: transform 0.5s ease-out;
      transition: 0.2s ease-out;
      .UnderlineMagical {
        background-size: 100% 80%;
      }
    }
    .Card:hover~.Card{
      position: relative;
      left: 50px;
      transition: 0.2s ease-out;
    }

  @media screen and (max-width: 1080px) {
    .CardContainer {
      .Card:hover {
        .link{
          .UnderlineMagical {
          background-size: 100% 80%;
        }
        }
        
      }
    }

    .title{
      writing-mode: vertical-rl;
      /* text-align: right; */
      transform: rotate(180deg);
      h1{
        margin-top: 0;
      }
    }
  }
`;

export default function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/.*projects/" } }
          limit: 10
          sort: { fields: frontmatter___date, order: DESC}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
              excerpt(format: PLAIN)
            }
          }
        }
      }
    `
  )

  return (    
      <FlexContainer>
      <div className="title">
        <h1>Recent Projects</h1>
        <Link to='/projects' style={{ textDecoration: "none"}}><p className="more">See More</p></Link>
      </div>
        <div className="CardContainer">
          {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="Card">
            <Link to={node.fields.slug} style={{ textDecoration: "none" }} className='link'>
              <h3 className="ProjTitle">
                <span className="UnderlineMagical">
                  {node.frontmatter.title}
                </span>
              </h3>
              <p className="Date">
                <span className="UnderlineMagical">
                  {node.frontmatter.date}
                </span>
              </p>
              <p className="Excerpt">{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      </FlexContainer>
  )
}
