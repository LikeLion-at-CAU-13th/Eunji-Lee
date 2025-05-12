// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <HomeNav>
        <HomeNavLink href="/">Home</HomeNavLink>
        <HomeNavLink href="/aboutme">About Me</HomeNavLink>
        <HomeNavLink href="/contact">Contact</HomeNavLink>
      </HomeNav>
      <Navbar active="home" />
      <Main>
        <Portfolio>Portfolio</Portfolio>
        <Name>Lee-Eunji</Name>
        <Week>WEEK 3</Week>
      </Main>
      <Footer>
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=1A7ECF&height=200&section=footer" 
          alt="footer" 
        />
      </Footer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const HomeNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 5%;
  gap: 50px;
  z-index: 10;
`;

const HomeNavLink = styled(Link)`
  text-decoration: none;
  color: rgb(26, 126, 207);
  font-size: 25px;
  font-family: "Dosis", serif;

  &:hover {
    font-weight: bold;
    font-style: italic;
  }
`;

const Main = styled.main`
  color: rgb(26, 126, 207);
  text-align: center;
`;

const Portfolio = styled.div`
  font-family: "Dosis", sans-serif;
  font-size: 90px;
  position: relative;
  top: 170px;
`;

const Name = styled.div`
  font-size: 35px;
  position: relative;
  top: 170px;
`;

const Week = styled.div`
  font-size: 18px;
  position: relative;
  top: 100px;
  right: -45%;
  transform: rotate(90deg);
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;