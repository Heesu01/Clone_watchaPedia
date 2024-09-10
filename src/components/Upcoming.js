import React from "react";
import styled from "styled-components";
import Poster from "../assets/Poster.jpg";

const Upcoming = () => {
  return (
    <Container>
      <Title>공개 예정작</Title>
      <CardBox>
        <Card>
          <RankNum> D-2 </RankNum>
          <img src={Poster} alt="포스터"></img>
          <Info>
            <Name>베테랑2</Name>
            <Date>
              넷플릭스 <span>2024.09.08</span>
            </Date>
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
  width: 250px;
  height: 450px;
  border-radius: 5px;
  flex: 0 0 auto;
  position: relative;

  img {
    width: 250px;
    height: 350px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
const RankNum = styled.div`
  width: 40px;
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
  font-weight: bold;
`;
const Info = styled.div`
  line-height: 1.3em;
`;
const Name = styled.div``;
const Date = styled.div`
  font-size: 15px;
  color: #444;
  span {
    color: red;
  }
`;
export default Upcoming;
