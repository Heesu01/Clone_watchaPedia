import React from "react";
import styled from "styled-components";
import adv from "../assets/adv.png";

const Banner = () => {
  return (
    <Container>
      <Img>
        <img src={adv} alt="배너" />
      </Img>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;

  img {
    width: 75%;
    height: 90px;
    border-radius: 5px;
  }
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export default Banner;
