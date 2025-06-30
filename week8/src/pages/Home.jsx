import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Header from "../components/Header";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <HomeNavbar />
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

const Main = styled.main`
  color: rgb(26, 126, 207);
  text-align: center;
  font-family: "Dosis", serif;
`;

const Portfolio = styled.div`
  font-size: 90px;
  position: relative;
  top: 230px;
`;

const Name = styled.div`
  font-size: 35px;
  position: relative;
  top: 230px;
`;

const Week = styled.div`
  position: absolute;
  top: 340px;
  right: 10px;
  transform: rotate(90deg);
  font-size: 18px;
  font-weight: normal;
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