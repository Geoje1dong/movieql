import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    vote_average: Float
    overview: String
    poster_path: String
    genre_ids: [Int!]
    backdrop_path: String
  }
  
  type Detaile {
    id: Int!
    title: String!
    backdrop_path: String
    genres: [String]
    overview:String
    poster_path: String
    release_date: String
    runtime: Int
    vote_average: Float
  }
  type Trailer {
    id: String!
    key: String!
    name: String!
    site: String!
  }

  type Query {
    movies(page:Int!): [Movie]! #!느낌표 있고 없고는 널값을 허용하는지 안하는지 이다. !허용안한다는 뜻이다.
    movie(id:Int!): Detaile
    Recommendation(id:Int!): [Movie]!
    movieTrailer(id:Int!): Trailer
  }
  `,
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
