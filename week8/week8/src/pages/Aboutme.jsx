// src/pages/AboutMe.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import profilePic from "../assets/picture.JPG";

const AboutMe = () => {
  return (
    <Container>
        <CommonNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </CommonNav>
      <Content>
        <LeftColumn>
          <img src={profilePic} alt="profile" />
          <h2>LEE EUNJI</h2>
          <p>프론트엔드 이은지입니다.</p>
          <p>2004.03.11</p>
          <p>소프트웨어학부 23학번</p>
        </LeftColumn>

        <RightColumn>
          <h2>🏷️ Education</h2>
          <p>2023 - ing | 중앙대학교 소프트웨어학부</p>
          <p>2025 - ing | 멋쟁이사자처럼 13th 아기사자</p>
        </RightColumn>
      </Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  padding: 20px;
`;

const CommonNav = styled.nav`
  position: relative;
  display: flex;
  top: 10px;
  justify-content: space-around;
  background-color: rgba(26, 126, 207, 0.6);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fffff0;
  font-size: 23px;
  font-family: "Dosis", sans-serif;

  &:hover {
    font-weight: bold;
    font-style: italic;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 40px;
  color: rgb(26, 126, 207);
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    border-radius: 30px;
  }

  p {
    font-size: 18px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-bottom: 40px;
`;

const Language = styled.div`
  margin-left: 100px;

  img {
    width: auto;
    height: 40px;
    border-radius: 30px;
    margin: 5px;
  }

  p {
    font-size: 18px;
  }
`;