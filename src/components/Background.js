import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GetMovie } from "../api/MainApi";
import Loading from "./Loading";

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
    return <Loading />;
  }

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}시간 ${minutes}분`;
  };

  return (
    <TopBox>
      <Bgi
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt=""
      />
      <Content>
        <Title>{movieDetails.title}</Title>
        <Text>
          {movieDetails.original_title} <br />
          {movieDetails.release_date.split("-")[0]} •
          {movieDetails.genres.map((genre) => genre.name).join("/")}
          <br />
          {formatRuntime(movieDetails.runtime)}•
          {movieDetails.adult ? "청소년관람불가" : "전체"} <br />
        </Text>
      </Content>
    </TopBox>
  );
};

const TopBox = styled.div`
  width: 100%;
  height: 500px;
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
