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
  background-color:#2a2e35;
  box-shadow: 0 4px 8px rgba(0,0,0,0.38);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  z-index:2000;
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
  $font:"Helvetica Neue", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  width: 30%;
  margin: 0;
  justify-content: space-around;
  z-index:0;
  font-family:$font;

  li{
    list-style: none;
    letter-spacing: 2px;
    margin: 0px;
    padding-right: 5px;
    padding-left: 5px;
    
    transition: 0.5s ease-in-out;
    &:hover{
      font-size:150%;
    }
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
    background-color: #2a2e35;
    opacity: 1;
    top: 8vh;
    height: 92vh;
    width: 100%;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-150%)'};
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
        <li><Link to="/project/" style={{textDecoration:'none', color:'white'}}>Projects</Link></li>
        <li>Initiatives</li>
        <li>Members</li>
        <li>Alumni</li>
        <li>About</li>
      </Ul>
      <Burger onClick={()=>{setOpen(!open)}} open={open}>
        <div/>
        <div/>
        <div/>
      </Burger>
    </Nav>
  )
}