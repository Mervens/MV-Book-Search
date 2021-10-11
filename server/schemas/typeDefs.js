const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
input SavedBookList {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}
type Query {
    me: User  
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookList!): User
    removeBook(bookId: ID!): User
}

`;


// export the typeDefs
module.exports = typeDefs;