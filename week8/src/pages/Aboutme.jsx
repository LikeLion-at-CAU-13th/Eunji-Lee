import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import styled from "styled-components";
import profilePic from "../assets/picture.JPG";

const AboutMe = () => {
  return (
    <Container>
        <CommonNavbar />
      <Content>
        <LeftColumn>
          <img src={profilePic} alt="profile" />
          <Information>
            <h2>| LEE EUNJI</h2>
            <p>프론트엔드 이은지입니다.</p>
            <p>2004.03.11</p>
            <p>소프트웨어학부 23학번</p>
          </Information>
        </LeftColumn>
        <RightColumn>
            <Education>
                <h2>🏷️ Education</h2>
                <p>| 2023 - ing | 중앙대학교 소프트웨어학부</p>
                <p>| 2025 - ing | 멋쟁이사자처럼 13th 아기사자</p>
            </Education>
            <Language>
                <h2>🏷️ Language</h2>
                <p>| I can use ..</p>
                <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=C&logoColor=white"/>
                <img src="https://img.shields.io/badge/c++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>
                <img src="https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=PYTHON&logoColor=white"/>
                <img src="https://img.shields.io/badge/JAVA-000000?style=for-the-badge&logo=openjdk&logoColor=white"/>
        
                <p>| I am learning ..</p>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
                <img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=REACT&logoColor=white"/>
                <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black"/>
                <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=TYPESCRIPT&logoColor=white"/>
            </Language>
        </RightColumn>
      </Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  padding: 20px;
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
`;

const Information = styled.div`
  margin-left: 15px;

  p {
    font-size: 18px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
  }

  img {
    width: auto;
    height: 40px;
    border-radius: 30px;
    margin: 5px;
  }
`;

const Education = styled.div`
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
`;