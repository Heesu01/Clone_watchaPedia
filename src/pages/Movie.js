import React from "react";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import Background from "../components/Background";
import Detail from "../components/Detail";

const Movie = () => {
  return (
    <Container>
      <Background />
      <Detail />
      <Gallery />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Movie;
