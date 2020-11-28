import { Link, useParams } from "react-router-dom";
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
//query 작성
//query에 variable이 있을 때(id같은거) 그 query의 이름을 적어야한다. only for Apollo.
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(-45deg, #d754ab, #fd732a);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Poster = styled.div`
  width: 25%;
  height: 65%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 18px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MiniPoster = styled.div`
  display: inline-block;
  width: 125px;
  height: 200px;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 18px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-right: 15px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  margin-bottom: 50px;
`;

const Suggestions = styled.div``;

//query 안에 movie(id: $id) 이부분 부터 server을 위한 query.

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  console.log(data?.suggestions);

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.movie?.language} • {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>

            <Suggestions>
              {data?.suggestions.map((m) => (
                <Link to={`/${m.id}`}>
                  <MiniPoster key={m.id} bg={m.medium_cover_image} />
                </Link>
              ))}
            </Suggestions>
          </>
        )}
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
};

export default Detail;
