import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: '//localhost:4000/',
  cache: new InMemoryCache(), // @apollo/client에서 요구함..
  resolvers: {
    Movie: {
      //apollo tools 보면 나오는 타입이랑 같아야한다.
      isLiked: () => false,
    },
    Mutation: {
      //이 동작은 서버에 있는 graphql resolver와 같이 동작
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        // console.log(id);
        const myMovie = {
          __typename: 'Movie',
          id: `${id}`,
          isLiked: `${isLiked}`,
        };
        cache.modify({
          // id: `Movie:${id}`,
          id: cache.identify(myMovie),
          fields: {
            isLiked: () => !isLiked,
          },
        });
      },
    },
  },
});

export default client;
