import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetUpcoming } from "../api/MainApi";

const Upcoming = () => {
  const [upcomingData, setUpcomingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetUpcoming();
        setUpcomingData(result.data.results);
      } catch (error) {
        console.error("개봉작 조회 에러: ", error);
      }
    };
    fetchData();
  });

  return (
    <Container>
      <Title>공개 예정작</Title>
      <CardBox>
        {upcomingData.map((movie) => (
          <Card key={movie.id}>
            <RankNum> D-2 </RankNum>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Info>
              <Name>{movie.title}</Name>
              <Date>
                넷플릭스 <span>{movie.release_date}</span>
              </Date>
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
