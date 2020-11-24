import React from 'react'
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

const BannerImage = styled(Image)`
    width: 100%;
    height: 250px;

    img{
      margin: 0;
    }
    @media only screen and (max-width: 786px){
        width: 100%;
        height: 200px;
    }
`

const CardDiv = styled.div`
    display: flex;
    width: 30%;
    overflow: hidden;
    margin: 0 1% 2%;
    background-color: #2a2e35;
    border-radius: 10px;
    box-shadow: 0 20px 20px rgba(10,10,10,0.6);
    transition: 0.2s ease-out;

    flex: 0 0 350px;

    .text{
      padding: 0 1rem 1rem;
    }
    .header{
        color:white;
        margin-top: 15px;
        .title{
            font-size: xx-large;
            font-weight: 400;
        }
    }

    .tags{
      margin: 2rem 0 0;
      color:white;
      display: flex;
      .tag{
          background-image:linear-gradient(0deg,#ff8a00,#e52e71);
          border-radius: 20px;
          margin: 5px;
          padding: 0 10px;
          min-width: 50px;
          text-align: center;
      }
    } 

    .excerpt{
        color:white;
        margin-top: 15px;
        text-align: justify;
        max-height: 150px;
    }

    &:hover{
      transform: translateY(-2%);
      transition: 0.2s ease-out;
    }

    @media only screen and (max-width: 786px){
        width: 90%;
        margin: 0 5% 5%;
    } 

`

const Card = ({frontmatter, excerpt, slug}) =>{
    return (
    <CardDiv>
      <Link to={slug} style={{ textDecoration: "none" }}>
        {frontmatter.featuredImage.childImageSharp && (
          <BannerImage
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            alt="Banner Image"
          />
        )}
        <div className='text'>
          <div className="header">
            <div className="title">{frontmatter.title}</div>
            <div className="date">{frontmatter.date}</div>
          </div>
          <div className="excerpt">{excerpt}</div>
          <div className='tags'>{frontmatter.tags.map((tag) => (
            <Link to={'/tags/' + kebabCase(tag)} style={{ textDecoration: "none", color: 'white' }}>
              <div className='tag'>{tag}</div>
            </Link>
          ))}</div>
        </div>
      </Link>
    </CardDiv>
    )
}

export default Card;
