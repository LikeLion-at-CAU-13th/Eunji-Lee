import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import styled from "styled-components";
import XR from "../assets/xr.png";
import CG from "../assets/cg.png"
import APP from "../assets/app.png";
import iOS from "../assets/iOS.png";

const Contact = () => {
  return (
    <Container>
        <CommonNavbar />
      <Content>
        <h2>If anyone is interested in these parts, please contact me!</h2>
        <InterestSection>
            <Figure>
                <img src={XR} alt="XR"/>
                <figcaption>XR</figcaption>
            </Figure>
            <Figure>
                <img src={CG} alt="CG"/>
                <figcaption>CG</figcaption>
            </Figure>
            <Figure>
                <img src={APP} alt="APP"/>
                <figcaption>APP</figcaption>
            </Figure>
            <Figure>
                <img src={iOS} alt="iOS"/>
                <figcaption>iOS</figcaption>
            </Figure>
        </InterestSection>
        <ContactInfo>
          <h2>🩵 HOW TO CONTACT 🩵</h2>
          <p>| Phone number 📞 | 010-6249-1743</p>
          <p>| Email 📧 | leg040311@gmail.com</p>
          <p>| Kakaotalk ID 💬 | iameunji_</p>
          <p>| Place 🏫 | 310 Building 7th floor</p>
        </ContactInfo>
      </Content>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  text-align: center;

  h2 {
    margin-top: 40px;
  }
`;

const InterestSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const Figure = styled.figure`
  text-align: center;
  margin: 20px;

  img {
    width: 120px;
    object-fit: cover;
  }

  figcaption {
    margin-top: 15px;
    font-size: 19px;
    color: rgb(26, 126, 207);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 10px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-size: 19px;
    margin: 10px;
    width: 305px;
  }
`;