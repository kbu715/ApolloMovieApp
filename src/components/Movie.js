import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 18px;
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 18px;
`;

const Movie = ({ id, bg, isLiked }) => {

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      {/* <button>{isLiked ? "Unlike" : "Like"}</button> */}
    </Container>
  );
};

export default Movie;
