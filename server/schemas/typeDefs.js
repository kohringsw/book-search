// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  input SaveBook {
    authors: [String] 
    description: String! 
    title: String! 
    bookId: String! 
    image: String! 
    link: String!
}

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: SaveBook): User
      removeBook(bookId: String!): User
  }

  type User {
      _id: ID!
      username: String!
      email: String!
      bookCount: Int!
      savedBooks: [type: Book]
  }

  type Book {
      bookId: ID!
      authors: [String]
      description: String
      title: String!
      image: String
      link: String
  }

  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;
