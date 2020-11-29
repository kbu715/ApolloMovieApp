import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";
import styled from "styled-components";

//query 작성
// @client : isLiked가 클라이언트에 있다고 알려준다. 백엔드에 등록을 한다.
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
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


const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>GraphQL :)</Subtitle>
      </Header>

      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((movie) => <Movie key={movie.id} isLiked={movie.isLiked} id={movie.id} bg={movie.medium_cover_image}/>)}
        </Movies>
    </Container>
  );
};

export default Home;
