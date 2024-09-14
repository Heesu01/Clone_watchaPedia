import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BiSolidPencil } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";
import { IoIosMore } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import { GetMovie } from "../api/MainApi";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [hover, setHover] = useState(0);

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

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

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
              평균 ★{Math.round(movieDetails.vote_average * 10) / 10}
              <span>({movieDetails.vote_count}명)</span>
            </p>
          </Graph>
        </LBox>
        <RBox>
          <StarBox>
            <Star>
              <StarIcon>
                {[...Array(5)].map((_, index) => {
                  const currentStar = index + 1;
                  return (
                    <FaStar
                      key={index}
                      size="40"
                      color={currentStar <= hover ? "red" : "#eee"}
                      onMouseEnter={() => handleMouseEnter(currentStar)}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: "pointer" }}
                    />
                  );
                })}
              </StarIcon>
              <p>평가하기</p>
            </Star>
            <Star>
              <Rate>{Math.round(movieDetails.vote_average * 10) / 10}</Rate>
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
  span {
    margin-left: 5px;
    font-size: 13px;
    color: gray;
  }
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
