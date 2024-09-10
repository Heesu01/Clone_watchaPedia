import React from "react";
import styled from "styled-components";
import back from "../assets/adv.png";

const Background = () => {
  return (
    <TopBox>
      <Bgi src={back} alt="" />
      <Content>
        <Title>안녕 할부지</Title>
        <Text>
          안녕 할부지 <br />
          2024 • 다큐멘터리 <br />
          1시간 35분 <br />
          예매순위 3위
        </Text>
      </Content>
    </TopBox>
  );
};

const TopBox = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
`;
const Bgi = styled.img`
  width: 100%;
  height: 500px;
`;
const Content = styled.div`
  color: #fff;
  position: absolute;
  left: 70px;
  top: 350px;
`;
const Title = styled.h1`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Text = styled.p`
  line-height: 2em;
  font-size: 14px;
`;

export default Background;
