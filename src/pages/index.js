import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import {ReactComponent as IsteLogo} from "../images/iste_logo_hollow.svg"

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items:color-interpolation-filters;

  margin-top:34vh;
  .text{
    color: white;
    grid-column: 1/3;
    font: Roboto;
    .name{
      font-style: normal;
      font-weight: normal;
      color: white;
      font-size:10rem;
      text-align:end;
    }
    .team{
      font-style: normal;
      font-weight: normal;
      color:#34cc1f;
      font-size: 3rem;
      text-align: end;
    }
  }

  .logo{
    grid-column-gap:30px;
    grid-column: 3/4;
    padding-left: 5rem;
  }

  @media screen and (max-width: 1080px){
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin-top: 5rem;
    .text{
      grid-row: 2/4;
      grid-column: 1/2;
      .name,.team{
        text-align:center;
      }
    }
    .logo{
      grid-row: 1/2;
      grid-column: 1/2;
      padding-left: 0rem;
      text-align:center;
    }
  }
`;

export default function IndexPage (){
  return (
    <Layout>
    <SEO title="Home" />
    <LandingDiv>
      <div className='text'>
        <h1 className='name'>ISTE NITH</h1>
        <h3 className='team'>WE ARE A TEAM</h3>
      </div>
      <div className='logo'>
        <IsteLogo width='300px' height='300px'/>
      </div>
    </LandingDiv>
    <Projects></Projects>
    <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}