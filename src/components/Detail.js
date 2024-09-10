import React from "react";
import styled from "styled-components";
import poster from "../assets/Poster.jpg";
import { FiPlus } from "react-icons/fi";
import { BiSolidPencil } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";
import { IoIosMore } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Banner from "../components/Banner";

const Detail = () => {
  return (
    <Container>
      <Info>
        <LBox>
          <Poster src={poster} alt="" />
          <Graph>
            <p>
              평균 ★3.4 <span>(6,400명)</span>
            </p>
          </Graph>
        </LBox>
        <RBox>
          <StarBox>
            <Star>
              <StarIcon>
                <FaStar size="40" />
                <FaStar size="40" />
                <FaStar size="40" />
                <FaStar size="40" />
                <FaStar size="40" />
              </StarIcon>
              <p>평가하기</p>
            </Star>
            <Star>
              <Rate>2.5</Rate>
              <p>평균 별점 (131명)</p>
            </Star>
            <IconBox>
              <Icon>
                <FiPlus size="50" />
                <p>보고싶어요</p>
              </Icon>
              <Icon>
                <BiSolidPencil size="50" />
                <p>코멘트</p>
              </Icon>
              <Icon>
                <HiEye size="50" />
                <p>보는 중</p>
              </Icon>
              <Icon>
                <IoIosMore size="50" />
                <p>더보기</p>
              </Icon>
            </IconBox>
          </StarBox>
          <Banner />
          <Story>
            가족들도 못 챙기고 밤낮 없이 범죄들과 싸우는 베테랑 형사
            '서도철'(황정민)과 강력범죄수사대 형사들. 어느 날, 한 교수의 죽음이
            이전에 발생했던 살인 사건들과 연관성이 있는 것으로 밝혀지며 전국은
            연쇄살인범으로 인해 떠들썩해진다. 이에 단서를 추적하며 수사를 시작한
            형사들. 하지만 이들을 비웃기라도 하듯, 연쇄살인범은 다음 살인 대상을
            지목하는 예고편을 인터넷에 공개하며 또 한 번 전 국민을 흔들어
            놓는다. 강력범죄수사대는 서도철의 눈에 든 정의감 넘치는 막내 형사
            '박선우' (정해인)를 투입한다. 그리고 사건은 새로운 방향으로 흐르게
            되는데...
          </Story>
        </RBox>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

const Info = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  display: flex;
  gap: 30px;
  padding: 40px 0;
`;
const LBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Poster = styled.img`
  width: 280px;
  height: 400px;
`;
const Graph = styled.div`
  padding: 20px 0;
`;
const RBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const StarBox = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 1.2px solid #ddd;
  display: flex;
  justify-content: space-between;
`;
const Star = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 15px;
    margin-left: 3px;
    color: gray;
    font-size: 12px;
  }
`;
const StarIcon = styled.div`
  display: flex;
  gap: 5px;
  color: #eee;
`;
const Rate = styled.div`
  font-size: 40px;
  text-align: center;
`;
const IconBox = styled.div`
  display: flex;
  gap: 30px;
`;
const Icon = styled.div`
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    font-size: 12px;
    color: gray;
    margin-top: 10px;
  }
`;
const Story = styled.div`
  font-size: 14px;
  line-height: 1.3em;
  color: #888;
`;

export default Detail;
