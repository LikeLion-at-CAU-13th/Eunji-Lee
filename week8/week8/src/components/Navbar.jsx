import React from "react";
import { Link } from "react-router-dom";  // Link로 변경
import styled from "styled-components";

const Navbar = ({ active }) => {
  return (
    <NavContainer>
      <NavLink to="/" $active={active === "home"}>Home</NavLink>
      <NavLink to="/aboutme" $active={active === "aboutme"}>About Me</NavLink>
      <NavLink to="/contact" $active={active === "contact"}>Contact</NavLink>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: rgba(26, 126, 207, 0.6);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  padding: 5px 10px;
  color: ${({ $active }) => ($active ? "rgb(26, 126, 207)" : "#fffff0")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }
`;