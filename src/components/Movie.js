import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 18px;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
};

export default Movie;
