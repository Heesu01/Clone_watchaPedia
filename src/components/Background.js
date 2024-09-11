import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GetMovie } from "../api/MainApi";

const Background = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const result = await GetMovie(id);
        setMovieDetails(result.data);
      } catch (error) {
        console.error("영화상세조회 에러: ", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>로딩중...</div>;
  }

  return (
    <TopBox>
      <Bgi
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt=""
      />
      <Content>
        <Title>{movieDetails.title}</Title>
        <Text>
          {movieDetails.title} <br />
          {movieDetails.release_date} •{" "}
          {movieDetails.genres.map((genre) => genre.name).join(", ")}
          <br />
          {movieDetails.runtime}분 •{" "}
          {movieDetails.adult ? "성인용" : "전체관람가"} <br />
          예매순위 {movieDetails.vote_average}위
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
