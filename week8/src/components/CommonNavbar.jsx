import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommonNavbar = () => {
    return (
        <CommonNav>
            <NavItem to = "/aboutme">About me</NavItem>
            <NavItem to = "/contact">Contact</NavItem>
            <NavItem to = "/">Home</NavItem>
        </CommonNav>
    );
};

export default CommonNavbar;

const CommonNav = styled.nav`
  position: relative;
  display: flex;
  top: 5px;
  justify-content: space-around;
  background-color: rgba(26, 126, 207, 0.6);
  border-radius: 10px;
  padding: 5px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fffff0;
  font-size: 23px;
  font-family: "Dosis", serif;

  &:hover {
  font-weight: bold;
  font-style: italic;
  }
`;
