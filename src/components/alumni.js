import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Img = styled(Image)`
  width: 100%;
  height: 50%;

  img {
    margin: 0;
  }
  @media only screen and (max-width: 786px) {
    width: 100%;
  }
`

const Flex = styled.div`
  margin-top: 5px;
  padding: 10px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .Card{
    color: white;
    max-width: 300px;
    height: 400px;
    border-radius: 20px;
    text-align: left;
    flex: 0 0 300px;
    overflow: hidden;
    background-color: #2a2e35;
    box-shadow: -16px 0 36px #000;
    position: relative;
    /* transition: transform 0.5s ease-out; */
    /* transition: 0.4s ease-out; */
    left: 0px;
    margin: 0.5rem 1rem 1rem;

    .content{
        margin-top: 10px;
        padding: 1rem;

        .name{
            font-size: x-large;
            font-family: Montserrat;
            font-weight: 600;
        }

        .batch{
            margin-top: 1rem
            display: flex;
            font-size: medium;
            font-weight: century-gothic,Montserrat;
        }

        .position{
            margin-top: 1rem
            font-size: large;
            font-family: Montserrat;
            font-weight: 400;
        }
    }
  }

  @media only screen and (max-width: 680px){

    width: 100%;
    justify-content: center;
    
      .Card{
          width: 100%;
      }
  }

`

export default function Alumni() {
  const data = useStaticQuery(graphql`
    query {
      allAlumniXlsxSheet1(sort: { fields: [ start,name ], order: [ DESC,ASC ] }) {
        edges {
          node {
            name
            start
            end
            link
            position
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Flex>
      <CardContainer>
        {data.allAlumniXlsxSheet1.edges.map((row, i) => (
          <div className="Card">
            <Link
              to={row.node.link}
              style={{ textDecoration: "none", color: "white" }}
              target="blank"
            >
              <Img fluid={row.node.img.childImageSharp.fluid}></Img>
              <div className="content">
                <div className="name">{row.node.name}</div>
                <div className="batch">{row.node.start} - {row.node.end}</div>
                <div className="position">{row.node.position}</div>
              </div>
            </Link>
          </div>
        ))}
      </CardContainer>
    </Flex>
  )
}
