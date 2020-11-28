import { useParams } from 'react-router-dom';
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//query 작성
//query에 variable이 있을 때(id같은거) 그 query의 이름을 적어야한다. only for Apollo.
const GET_MOVIE = gql` 
    query getMovie($id: Int!){
        movie(id: $id) { 
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

//query 안에 movie(id: $id) 이부분 부터 server을 위한 query.

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) }
    });

    if(loading) {
        return 'loading...';
    } 
    if(data && data.movie) {
        return data.movie.title;
    }
}

export default Detail;