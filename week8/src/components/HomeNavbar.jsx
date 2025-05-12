import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeNavbar = () => {
    return (
        <HomeNav>
            <NavItem to = "/aboutme">About me</NavItem>
            <NavItem to = "/contact">Contact</NavItem>
            <NavItem to = "/"><strong><em>Home</em></strong></NavItem>
        </HomeNav>
    );
};

export default HomeNavbar;

const HomeNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 130%;
  left: 5%;
  gap: 50px;
  z-index: 10;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: rgb(26, 126, 207);
  font-size: 25px;
  font-family: "Dosis", serif;
  font-weight: normal;

  &:hover {
    font-weight: bold;
    font-style: italic;
  }

  &.link {
    font-weight: normal;
  }
`;