import React from "react";
import styled from "styled-components";
import adv from "../assets/adv.png";

const Banner = () => {
  return (
    <Container>
      <img src={adv} alt="배너" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Banner;
