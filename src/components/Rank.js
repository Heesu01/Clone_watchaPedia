import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetRank } from "../api/MainApi";

const Rank = () => {
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetRank();
        setRankData(result.data.results);
      } catch (error) {
        console.error("영화순위 조회 에러:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>박스오피스 순위</Title>
      <CardBox>
        {rankData.map((movie, index) => (
          <Card key={movie.id}>
            <RankNum>{index + 1}</RankNum>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Info>
              <Name>{movie.title}</Name>
              <Date>
                {movie.release_date.split("-")[0]} •{" "}
                {movie.original_language === "ko" ? "한국" : "외국"}
              </Date>
              <Text>
                {" "}
                예매율 {movie.vote_average}% • 누적 관객{" "}
                {Math.round(movie.popularity)}명
              </Text>
            </Info>
          </Card>
        ))}
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
  font-weight: bold;
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
