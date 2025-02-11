import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Nav>
        <Logo to="/" onClick={closeMenu}>
          <Show src={logo} alt="Logo" />
        </Logo>
        <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        <Bar menuOpen={menuOpen}>
          <StyledLink to="/" onClick={closeMenu}>
            <span>HOME</span>
          </StyledLink>
          <Dropdown>
            <StyledLink as="div">
              <span>SUITS</span>
            </StyledLink>
            <DropdownContent>
              <StyledLink to="/know-your-suit" onClick={closeMenu}>KNOW YOUR SUIT</StyledLink>
              <StyledLink to="/suits" onClick={closeMenu}>FABRICS</StyledLink>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <StyledLink as="div">
              <span>SHIRTS</span>
            </StyledLink>
            <DropdownContent>
              <StyledLink to="/know-your-shirt" onClick={closeMenu}>KNOW YOUR SHIRT</StyledLink>
              <StyledLink to="/shirts" onClick={closeMenu}>FABRICS</StyledLink>
            </DropdownContent>
          </Dropdown>
          <StyledLink to="/jackets" onClick={closeMenu}>
            <span>JACKETS</span>
          </StyledLink>
          <StyledLink to="/contact" onClick={closeMenu}>
            <span>CONTACT</span>
          </StyledLink>
          <StyledLink to="/about" onClick={closeMenu}>
            <span>ABOUT</span>
          </StyledLink>
        </Bar>
        <Since>Since 1995</Since>
      </Nav>
    </div>
  );
};

// Styled Components (No Changes in Styling)
const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
  background-color: white;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

const Logo = styled(Link)`
  margin-top: 0px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
  }
`;

const Show = styled.img`
  width: 12vw;

  @media (max-width: 768px) {
    width: 25vw;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.9;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;

  span {
    color: black;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 1.08;
    position: relative;
    white-space: nowrap;

    &:before {
      background-color: #2c5ca4;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover span:before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: flex;
    flex-direction: column;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 105%;
  left: 0;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${StyledLink} {
    padding: 10px 20px;
    text-decoration: none;
    color: black;
    white-space: nowrap;

    &:hover {
      background-color: #f2f2f2;
      color: #2c5ca4;
    }
  }

  @media (max-width: 768px) {
    position: relative;
    box-shadow: none;
  }
`;

const Since = styled.a`
  background-color: #2c5ca4;
  color: white;
  padding: 10px 12px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 100px;
  font-size: 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export default Navbar;
