import React, { useEffect, useState } from "react";
import styled from "styled-components";
import poster from "../assets/Poster.jpg";
import { FiPlus } from "react-icons/fi";
import { BiSolidPencil } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";
import { IoIosMore } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import { GetMovie } from "../api/MainApi";

const Detail = () => {
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
    <Container>
      <Info>
        <LBox>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt=""
          />
          <Graph>
            <p>
              평균 ★{movieDetails.vote_average}{" "}
              <span>({movieDetails.popularity})</span>
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
              <Rate>{movieDetails.vote_average}</Rate>
              <p>평균 별점 ({movieDetails.vote_count}명)</p>
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
          <Story>{movieDetails.overview}</Story>
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
