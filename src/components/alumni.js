import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Img = styled(Image)`
  width: 100%;
  height: 150px;

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
    width: 250px;
    height: 100%;
    max-width: 300px;
    border-radius: 20px;
    text-align: left;
    flex: 0 0 250px;
    overflow: hidden;
    background-color: #2a2e35;
    box-shadow: -16px 0 36px #000;
    position: relative;
    /* transition: transform 0.5s ease-out; */
    /* transition: 0.4s ease-out; */
    left: 0px;
    margin: 0 -2rem 1rem;

    .content{
        margin-top: 10px;

        .name{
            font-size: x-large;
            font-family: Montserrat;
            font-weight: 600;
        }

        .batch{
            margin-top: 1rem
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            .start, .end{
                font-size: medium;
                font-weight: century-gothic,Montserrat;
            }
        }

        .position{
            margin-top: 1rem
            font-size: large;
            font-family: Montserrat;
            font-weight: 400;
        }
    }
  }

`

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allAlumniXlsxSheet1(sort: { fields: name, order: ASC }) {
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
                <div className="batch">
                    <div className="start">{row.node.start}</div> - <div className="end">{row.node.end}</div>
                </div>
                <div className="position">{row.node.name}</div>
              </div>
            </Link>
          </div>
        ))}
      </CardContainer>
    </Flex>
  )
}
