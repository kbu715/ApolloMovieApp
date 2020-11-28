import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";
import styled from "styled-components";

//query 작성
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd732a);
  height: 50vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
    font-size: 35px;
`;


const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I love Graphql</Subtitle>
      </Header>

      {loading && <Loading>Loading...</Loading>}
      {!loading &&
        data.movies &&
        data.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)}
    </Container>
  );
};

export default Home;
