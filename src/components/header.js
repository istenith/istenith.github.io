import { Link } from "gatsby"
import React, { useState } from "react"
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top:0;
  width: 100%;
  min-height: 8vh;
  box-sizing: border-box;
  color: white;
  background-color:black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  .logo{
    z-index:400;
    letter-spacing: 5px;
    margin: 0;
    padding:0;
    Link{
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  width: 30%;
  margin: 0;
  justify-content: space-around;
  z-index:0;

  li{
    list-style: none;
    letter-spacing: 2px;
    margin: 0;
    padding-right: 4px;
    padding-left: 4px;
  }

  @media screen and (max-width: 1200px){
    width: 45%;
  }

  @media screen and (max-width: 800px){
    width: 60%;
  }

  @media screen and (max-width: 790px){
    position: fixed;
    flex-flow: column nowrap;
    align-items: center;
    /* background-color: #303030ff; */
    top: 8vh;
    height: 92vh;
    width: 100%;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: transform 0.5s ease-in-out;
    li{
      opacity: ${({ open }) => open ? 1 : 0};
      transition: opacity 1s ease-in-out;
    }
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  div{
    width: 23px;
    height: 3px;
    background-color: white;
    margin: 4px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media screen and (max-width: 790px){
    display: block;
  }
`;

export default function Header(){ 

  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <h2 className="logo">
        <Link to="/" style={{textDecoration:'none', color:'white'}}>ISTE-NITH</Link>
      </h2>
      <Ul open={open}>
        <li>Projects</li>
        <li>Members</li>
        <li>Alumni</li>
        <li>About Us</li>
      </Ul>
      <Burger onClick={()=>{setOpen(!open)}} open={open}>
        <div/>
        <div/>
        <div/>
      </Burger>
    </Nav>
  )
}