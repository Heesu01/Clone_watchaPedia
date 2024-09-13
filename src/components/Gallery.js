import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { GetImage, GetSimilar } from "../api/MainApi";

const Gallery = () => {
  const { id } = useParams();
  const [movieImg, setMovieImg] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieImg = async () => {
      try {
        const result = await GetImage(id);
        setMovieImg(result.data.backdrops.slice(0, 10));
      } catch (error) {
        console.error("이미지조회 에러: ", error);
      }
    };
    fetchMovieImg();

    const fetchSimilarMovies = async () => {
      try {
        const result = await GetSimilar(id);
        setSimilarMovies(result.data.results);
      } catch (error) {
        console.error("비슷한작품 조회 에러: ", error);
      }
    };
    fetchSimilarMovies();
  }, [id]);

  if (!movieImg || movieImg.length === 0) {
    return <div>로딩중...</div>;
  }

  return (
    <Container>
      <Content>
        <Title>갤러리</Title>
        <PictureBox>
          {movieImg.map((img, index) => (
            <Picture
              key={index}
              src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
              alt={`갤러리 사진 ${index + 1}`}
            />
          ))}
        </PictureBox>
      </Content>
      <Content>
        <Title>비슷한 작품</Title>
        <PictureBox>
          {similarMovies.map((movie) => (
            <GalleryItem
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <PosterImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </GalleryItem>
          ))}
        </PictureBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: auto;
  padding-top: 70px;
`;
const Content = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  padding-bottom: 100px;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const PictureBox = styled.div`
  display: flex;
  overflow: scroll;
  scrollbar-width: none;
  gap: 15px;
`;
const Picture = styled.img`
  width: 430px;
  height: 290px;
`;

const GalleryItem = styled.div`
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const PosterImg = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
export default Gallery;
