import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Rank from "../components/Rank";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Rank />
      <Upcoming />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export default Home;
