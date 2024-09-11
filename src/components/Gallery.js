import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GetImage } from "../api/MainApi";

const Gallery = () => {
  const { id } = useParams();
  const [movieImg, setMovieImg] = useState([]);

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
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 500px;
  padding-top: 70px;
`;
const Content = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  padding-bottom: 35px;
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
export default Gallery;
