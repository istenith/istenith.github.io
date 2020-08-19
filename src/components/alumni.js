import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faFacebook,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Img = styled(Image)`
height:100%;
width:80%;
 
  @media only screen and (max-width: 786px) {
    width: 70%;
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
    position:relative;
    margin:20px 8px 20px 20px;
}
.Card ul li{
  list-style: none;
}
.Card .inner-box{    
    position:relative;
    padding:40px 40px 60px 0px;
}

.Card .inner-box:before{
    position:absolute;
    content:'';
    right:0px;
    top:0px;
    left:70px;
    bottom:0px;
    border-radius:10px;
    background-color:#f5f5f5;
    -webkit-transition:all 600ms ease;
    -moz-transition:all 600ms ease;
    -ms-transition:all 600ms ease;
    -o-transition:all 600ms ease;
    transition:all 600ms ease;
}

.Card .inner-box::after{
    position:absolute;
    content:'';
    top:0px;
    left:70px;
    bottom:0px;
    width:0%;
    border-radius:10px;
    -webkit-transition:all 600ms ease;
    -moz-transition:all 600ms ease;
    -ms-transition:all 600ms ease;
    -o-transition:all 600ms ease;
    transition:all 600ms ease;
    
    background : #cf0739;/* the transition color*/
}

.Card .inner-box:hover::after{
    width:78.5%;
}

.Card .inner-box .social-icons{
    position:absolute;
    right:25px;
    top:50px;
    z-index:1;
}

.Card .inner-box .social-icons li{
    position:relative;
    margin-bottom:20px;
}

.Card .inner-box .social-icons li a{
    position:relative;
    color:#c00b29;
    font-size:18px;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

.Card .inner-box:hover .content .name,
.Card .inner-box:hover .social-icons li a,
.Card .inner-box:hover .content .position,
.Card .inner-box:hover .content .batch{
    color:#ffffff;
}


.Card .inner-box .image{
  position:relative;
  z-index:1;
  weight :90%;
    border-radius:50%;
    display:inline-block;
  }


.Card .inner-box .content{
    position:relative;
    text-align:left;
    z-index:1;
    padding:30px 15px 0px 110px;
}

.Card .inner-box .content .name{
    position:relative;
    color:#E20351;
    font-size:18px;
    font-weight:700;
    line-height:1.3em;
}

.Card.inner-box .content .name{
    position:relative;
    color:#c70919;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

.Card .inner-box .content .position{
    position:relative;
    margin-top:5px;
    color:#393939;
    font-size:14px;
}

.Card.style-two .inner-box .content .name,
.Card.style-two .inner-box .social-icons li a{
    color:#ff9600;
}

.Card.style-two .inner-box:hover .content .name,
.Card.style-two .inner-box:hover .social-icons li a{
    color:#ffffff;
}


  @media only screen and (max-width: 680px){

    width: 75%;
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
          <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul class="social-icons">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} size="1x" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a></li>

                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} size="1x" /></a></li>
                        </ul>
            <Img className="image" fluid={row.node.img.childImageSharp.fluid}></Img>        
              <div className="content">
                <div className="name">{row.node.name}</div>
                <div className="position">{row.node.position}</div>
                <div className="batch">{row.node.start} - {row.node.end}</div>
                
              </div>
            </div>
          </div>
        ))}
      </CardContainer>
    </Flex>
  )
}
