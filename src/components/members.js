import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import iste_logo from "../images/albert.jpeg"
import Bounce from "react-reveal/Bounce"

const FlexContainer = styled.div`
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Img = styled(Image)`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  margin: 20px 20px 10px 20px;
`
const Member_Card = styled.div``

const Img_Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
`

const Flex = styled.div`
  width: 100%;
  ${"" /* max-width:1800px; */}
  display:flex;
  height: 97vh;
  box-shadow: 2px 20px 38px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1177px) {
    display: block !important;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .year {
    flex: none;
    margin: 0;
    padding: 0;
    font-size: 10vh;
    margin-bottom: 20px;
    @media screen and (min-width: 1177px) {
      margin-top: 40vh;
    }
    @media screen and (max-width: 1177px) {
      margin-top: 5vh;
    }
    h1 {
      color: rgba(108, 50, 224, 0.8);
      text-align: center;
      @media screen and (min-width: 1177px) {
        transform: rotate(-90deg);
      }
    }
  }
  .left-container {
    background-color: rgba(196, 196, 196, 0.14);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    text-align: center;
    height: 77vh;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 30px;
    margin-top: 5%;
    box-shadow: 2px 20px 38px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 1177px) {
      width: 50%;
      justify-content: space-around;
      left: 6%;
      margin-bottom: 5%;
    }
    @media screen and (max-width: 1177px) {
      height: 250px;
      display: flex;
      flex-wrap: nowrap;
      width: 95%;
      margin-left: 2.5%;
      border-radius: 1vw 1vw 0 0;
      overflow-x: scroll;
    }
  }
  .right-container {
    width: 50%;
    @media screen and (max-width: 1177px) {
      width: 100%;
    }
    .Info {
      width: 80%;
      margin-left: 13%;
      position: relative;
      @media screen and (max-width: 1177px) {
        margin-left: 2.5%;
        width: 95%;
      }
      .selected_member {
        position: relative;
        padding: 50px 80px 80px;
        border-radius: 0 0 1vw 1vw;
        width: 100%;
        background: black;
        text-align: center;
        background: rgba(196, 196, 196, 0.14);
        box-shadow: 7px 8px 20px 5px rgba(0, 0, 0, 0.5);
        @media screen and (min-width: 1178px) {
          height: 27vh;
        }
        @media screen and (max-width: 1177px) {
          margin-top: 0;
          border-radius: 0px 0px 15px 15px;
          box-shadow: none;
          display: flex;
          padding: 4vw 2vw;
          width: 100%;
        }
        h1 {
          color: white;
          font-size: 2.5vw;
          @media screen and (max-width: 1177px) {
            font-size: 4vw;
          }
        }
        h3 {
          color: rgba(108, 50, 224, 0.7);
          font-size: 1.5vw;
          @media screen and (max-width: 1177px) {
            font-size: 3vw;
          }
        }
        .before1177 {
          @media screen and (max-width: 1177px) {
            width: 50%;
            text-align: left;
          }
          .handle1177 {
            @media screen and (min-width: 1178px) {
              display: none;
            }
            .social_links {
              @media screen and (max-width: 1177px) {
                display: flex;
                bottom: 4vh;
                position: absolute;
              }
              .linkedin svg,
              .insta svg {
                flex: none;
                width: 3vw;
                margin-left: 2vw;
                @media screen and (max-width: 530px) {
                  width: 5vw;
                }
              }
            }
          }
        }
        .after1177 {
          flex: none;
          width: 50%;
          display: none;
          @media screen and (max-width: 1177px) {
            display: block;
            text-align: right;
            color: white;
          }
        }
      }
      .selected_member_desc {
        background-color: #120606;
        box-shadow: 10px 8px 20px 5px rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 80%;
        border-radius: 30px 0 30px 30px;
        right: -9%;
        bottom: 8vh;
        ${"" /* top:40vh; */}
        display:flex;
        @media screen and (max-width: 1177px) {
          display: none;
        }
        .selected_member_img {
          position: absolute;
          top: 0px;
          left: 0px;
          transform: translate(-50%, -50%);
          img {
            border-radius: 100%;
            margin: 0;
            height: 15vw;
            width: 15vw;
            box-shadow: 10px 50px 50px 10px rgba(0, 0, 0, 0.25);
          }
        }
        .social_handle {
          flex: none;
          border-radius: 30px 0 0 30px;
          padding: 1.2vw;
          background: rgba(108, 50, 224, 0.7);
          width: 20%;
          width: fit-content;
          .social_links {
            height: max-content;
            margin-top: 30vh;
            .linkedin svg,
            .insta svg {
              width: 1.3vw;
            }
          }
        }
        .description {
          flex: none;
          width: 80%;
          .Branch {
            margin: 40px 20px 40px 40px;
            text-align: right;
            h3 {
              color: rgba(108, 50, 224, 0.8);
            }
            @media screen and (max-width: 1105px) {
              margin-right: 30px;
            }
          }
          .desc {
            p {
              width: 80%;
              color: #ffff;
              margin: auto;
              margin-top: 1vw;
              text-align: justify;
              font-weight: light;
              font-size: 1.25rem;
            }
          }
          .location {
            margin: 40px 10px 40px 10px;
          }
          .area,
          .State {
            color: #fff;
            text-align: right;
          }
        }
      }
    }
  }
`
export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allMembersXlsxSheet1(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }

      allMembersXlsxSheet2(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }

      allMembersXlsxSheet3(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }

      allMembersXlsxSheet4(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            image_link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }
      allMembersXlsxSheet5(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }
    }
  `)

  const onFocus = {
    filter: "blur(10px)",
    opacity: 0.5,
    transition: "0.3s ease-in-out",
  }

  const [scrollDir, setScrollDir] = useState("scrolling down")

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up")
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    // console.log(scrollDir)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollDir])
  const [fulldata, setFullData] = useState(false);
  const [name, setName] = useState("Abhay Raj Singh Rathod")
  const [desc, setDesc] = useState("Ex-Joint Technical Secretary")
  const [img, setImg] = useState(iste_logo)
  const [linkedin, setLinkedin] = useState("")
  const [branch, setBranch] = useState("Material Science and Engineering")
  const [city, setCity] = useState("Gurugram")
  const [state, setState] = useState("Haryana")
  const [about, setAbout] = useState(
    "A Material Science Engineer with a special love for softwares and their development, especially for the back-end development."
  )
  const [key, setKey] = useState(-1)

  const [mouse, setMouse] = useState({})

  function ReadName(event) {

    setFullData(false);
    var Name = event.currentTarget.getAttribute("data-name")
    var Desc = event.currentTarget.getAttribute("data-description")
    var Linkedin = event.currentTarget.getAttribute("data-linkedin")
    var Img = event.currentTarget.getAttribute("data-img")
    var Branch = event.currentTarget.getAttribute("data-branch")
    var City = event.currentTarget.getAttribute("data-city")
    var State = event.currentTarget.getAttribute("data-state")
    var About = event.currentTarget.getAttribute("data-about")
    var key = event.currentTarget.getAttribute("data-key")
    // console.log(Branch, Img, City, State, About)
    setName(Name)
    setDesc(Desc)
    setLinkedin(Linkedin)
    setImg("https://drive.google.com/thumbnail?id=" + Img)
    setBranch(Branch)
    setCity(City)
    setState(State)
    setAbout(About)
    setKey(key)
    // console.log(branch, img, city, state, about)
    var key = event.currentTarget.getAttribute("data-key")
    setMouse(onFocus)
  }

  function mouseOut(event) {
    setMouse({})

    // setFullData(true);
    var key = event.currentTarget.getAttribute("data-key")
    // console.log(key)
  }
  function Instagram(props) {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin"
        class="svg-inline--fa fa-linkedin fa-w-14 fa-1x "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="#fff"
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        ></path>
      </svg>
    )
  }

  function Linkedin(props) {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="instagram"
        class="svg-inline--fa fa-instagram fa-w-14 fa-1x "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="#fff"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        ></path>
      </svg>
    )
  }
  function fulldataShowCrowww(){
    setFullData(true);
  }
  function TodaAurDikhao(props){
    var desc = props.desc
    return(
      <div>
        {!fulldata?<div>{desc.substring(0,150)}...<a onClick={fulldataShowCrowww}>Read More</a></div>:desc}
      </div>
    )
  }

  function Selected_member(props) {
    return (
      <div className="Info">
        <div className="selected_member">
          <div className="before1177">
            <div className="name">
              <h1>{props.name}</h1>
            </div>
            <div className="position">
              <h3>{props.desc}</h3>
            </div>
            <div className="social_handle handle1177">
              <div className="social_links">
                <div className="linkedin">
                  <a href={props.linkedin} target="_blank">
                    <Instagram />
                  </a>
                </div>
                <div className="insta">
                  <a
                    href="https://www.instagram.com/teamistenith/?hl=en"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="description after1177">
            <div className="Branch">
              <h3>{props.branch}</h3>
            </div>
            <div className="desc">
              <p>{props.about}</p>
            </div>
            <div className="location">
              <div className="area">{props.city}, </div>
              <div className="State">{props.state}</div>
            </div>
          </div>
        </div>
        <div className="selected_member_desc">
          <div className="social_handle">
            <div className="social_links">
              <div className="linkedin">
                <a href={props.linkedin}>
                  <Instagram height="3vw" width="3vw" />
                </a>
              </div>
              <div className="insta">
                <a href="https://www.instagram.com/teamistenith/?hl=en">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="Branch">
              <h3>{props.branch}</h3>
            </div>
            <div className="desc">
              <p>
                {props.about.length<=150 ? 
                  (props.about)
                  :
                  (<TodaAurDikhao desc={props.about}/>)
                }</p>
            </div>
            <div className="location">
              <div className="area">{props.city}, </div>
              <div className="State">{props.state}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const myContainer = useRef(null)

  useEffect(() => {
    // console.log("myContainer..", myContainer.current.attributes.className)
  })

  return (
    <FlexContainer>
      <Flex className="Final_Year">
        <div className="year">
          <h1>BATCH 2022</h1>
        </div>
        <div className="left-container container">
          {data.allMembersXlsxSheet4.edges.map((row, i) =>
            i != key ? (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  name={row.node.name}
                  style={mouse}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            ) : (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  style={{
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    transform: "scale(1.0)",
                  }}
                  name={row.node.name}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            )
          )}
        </div>
        <div className="right-container container">
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          />
        </div>
        {/* </div> */}
      </Flex>
      <Flex className="Third_Year">
        <div className="year">
          <h1>FINAL YEAR</h1>
        </div>
        <div className="left-container container">
          {data.allMembersXlsxSheet3.edges.map((row, i) =>
            i != key ? (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  name={row.node.name}
                  style={mouse}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            ) : (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  style={{
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    transform: "scale(1.0)",
                  }}
                  name={row.node.name}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            )
          )}
        </div>
        <div className="right-container container">
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          />
        </div>
        {/* </div> */}
      </Flex>
      <Flex className="Second_Year">
        <div className="year">
          <h1>THIRD YEAR</h1>
        </div>
        <div className="left-container container">
          {data.allMembersXlsxSheet2.edges.map((row, i) =>
            i != key ? (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  name={row.node.name}
                  style={mouse}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            ) : (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  style={{
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    transform: "scale(1.0)",
                  }}
                  name={row.node.name}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            )
          )}
        </div>
        <div className="right-container container">
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          />
        </div>
        {/* </div> */}
      </Flex>
      <Flex className="First_Year">
        <div className="year">
          <h1>SECOND YEAR</h1>
        </div>
        <div className="left-container container">
          {data.allMembersXlsxSheet1.edges.map((row, i) =>
            i != key ? (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  name={row.node.name}
                  style={mouse}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            ) : (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  style={{
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    transform: "scale(1.0)",
                  }}
                  name={row.node.name}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            )
          )}
        </div>
        <div className="right-container container">
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          />
        </div>
        {/* </div> */}
      </Flex>
      <Flex className="First_Year">
        <div className="year">
          <h1>FIRST YEAR</h1>
        </div>
        <div className="left-container container">
          {data.allMembersXlsxSheet5.edges.map((row, i) =>
            i != key ? (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  name={row.node.name}
                  style={mouse}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            ) : (
              <Bounce>
                <Member_Card
                  className="Card"
                  key={i}
                  id={i}
                  ref={myContainer}
                  data-key={i}
                  style={{
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    transform: "scale(1.0)",
                  }}
                  name={row.node.name}
                  data-description={row.node.description}
                  data-img={row.node.image_link}
                  data-linkedin={row.node.link}
                  data-name={row.node.name}
                  data-branch={row.node.branch}
                  data-city={row.node.city}
                  data-state={row.node.state}
                  data-about={row.node.about}
                  onMouseOver={ReadName}
                  onMouseOut={mouseOut}
                >
                  <Img fluid={row.node.img.childImageSharp.fluid}></Img>
                  <div className="content" style={{ color: "white" }}>
                    <div className="name">{row.node.name}</div>
                  </div>
                  {/* </Link> */}
                </Member_Card>
              </Bounce>
            )
          )}
        </div>
        <div className="right-container container">
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          />
        </div>
        {/* </div> */}
      </Flex>
    </FlexContainer>
  )
}
