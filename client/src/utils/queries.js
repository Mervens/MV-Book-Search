import gql from 'graphql-tag';


export const GET_THIS = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;