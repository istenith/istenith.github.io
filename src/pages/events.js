import React, { useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "aos/dist/aos.css";
import Aos from "aos";
import Footer from "../components/footer"
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  color: white;
  border-radius: 20px;
  a {
    color:#000!important;
  }
  .links {
    .link {
      background-color: #3a3e45;
      text-decoration: none;
      color: white;
      border-top-left-radius: 15px;
      border-bottom-right-radius: 15px;
      transition: 0.5s;
      &:hover {
        color: #2a2e35;
        background-color: white;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .FlexContainer {
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: flex;
    margin-bottom: 3vh;
    @media screen and (max-width:1312px) {
      display: block;
      margin: 10px;
      .btn-primary {
        margin-left: 10px;
        margin-top: 17px;
        z-index: 10;
      }
    }
    .Image {
      background: rgba(108, 50, 224, 0.55);
      border-radius: 20px;
      z-index: 2;
      flex: none;
      padding: 20px 20px 0 20px;
      width: 15%;
      box-shadow: 20px 20px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.6);
      @media screen and (max-width:1312px) {
        width: 100%;
        margin: 10px;
      }
      Img {
        @media screen and (max-width:1312px) {
          width: 100%;
        }
      }
    }
    .Title {
      text-align: center;
      font-size: 18px;
      margin-top: 20px;
      color: white;
      Z-index: 99;
    }
  }
  .EventContent {
    background: rgba(108, 50, 224, 0.45);
    border-radius: 20px;
    padding: 20px;
    margin-left: -3px;
  }
  a {
    color: white!important;
  }
  .btn-primary {
    z-index: 10;
    background-color: rgb(108 50 224 / 45%);
    color: white;
    border-radius: 56px;
    height: 46px;
    width: 134px;
    border-color: azure;
    position: relative;
    overflow: hidden;

    &::after, &::before {
      content: '';
      background-color: rgb(224 82 21 / 85%);
      height: 50%;
      width: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      -webkit-transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      z-index: -1;
    }

    &:hover::before {
      width: 100%;
      right: 0;
      left: auto;
    }

    &:before {
      top: 0;
      left: 0;
      right: auto;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: auto;
    }

    &:after {
      bottom: 0;
      right: 0;
      left: auto;
    }
  }

  .gatsby-image-wrapper {
    img {
      // CSS for gatsby-image
    }
  }
`;

export default function Events() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const list = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*initiatives/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              links
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const data = list.allMarkdownRemark.edges;
  console.log(data);

  return (
    <>
      <Layout>
        <SEO title="Members" />
        {data.map(({ node }) => (
          <Container>
            <div className="FlexContainer">
              <div className="Image">
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  style={{ margin: '0!important' }}
                />
                <h1 className="Title">{node.frontmatter.title}</h1>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: node.html }}
                className="EventContent"
              ></div>
              <div>
                <Button className="btn-primary eventBtn">
                  <a href="">More info</a>
                </Button>{' '}
              </div>
            </div>
          </Container>
        ))}
      </Layout>
      <Footer />
    </>
  )
}
