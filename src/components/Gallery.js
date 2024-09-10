import React from "react";
import styled from "styled-components";
import back from "../assets/adv.png";

const Gallery = () => {
  return (
    <Container>
      <Content>
        <Title>갤러리</Title>
        <PictureBox>
          <Picture src={back} alt="갤러리사진" />
          <Picture src={back} alt="갤러리사진" />
          <Picture src={back} alt="갤러리사진" />
          <Picture src={back} alt="갤러리사진" />
        </PictureBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 500px;
  padding-top: 70px;
`;
const Content = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  padding-bottom: 35px;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const PictureBox = styled.div`
  display: flex;
  overflow: scroll;
  scrollbar-width: none;
  gap: 15px;
`;
const Picture = styled.img`
  width: 430px;
  height: 290px;
`;
export default Gallery;
