import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      //apollo tools 보면 나오는 타입이랑 같아야한다.
      isLiked: () => false,
    },
    Mutation: {
      //이 동작은 서버에 있는 graphql resolver와 같이 동작
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});

export default client;
