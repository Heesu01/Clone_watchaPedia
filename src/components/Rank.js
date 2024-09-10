import React from "react";
import styled from "styled-components";
import Poster from "../assets/Poster.jpg";

const Rank = () => {
  return (
    <Container>
      <Title>박스오피스 순위</Title>
      <CardBox>
        <Card>
          <RankNum>1</RankNum>
          <img src={Poster} alt="포스터"></img>
          <Info>
            <Name>베테랑2</Name>
            <Date>2024 • 한국</Date>
            <Text> 예매율 51% • 누적 관객 100명</Text>
          </Info>
        </Card>
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const CardBox = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  overflow: scroll;
  scrollbar-width: none;
  gap: 15px;
`;
const Card = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 5px;
  flex: 0 0 auto;
  position: relative;

  img {
    width: 200px;
    height: 270px;
  }
`;
const RankNum = styled.div`
  width: 25px;
  height: 25px;
  background-color: #000;
  opacity: 0.8;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;
  padding-top: 5px;
`;
const Info = styled.div`
  line-height: 1.3em;
`;
const Name = styled.div``;
const Date = styled.div`
  font-size: 15px;
  color: #444;
`;
const Text = styled.div`
  font-size: 13px;
  color: #888;
`;
export default Rank;
