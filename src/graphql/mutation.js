import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login(
      $email: String!, 
      $password: String!, 
    ) {
    tokenAuth(
        email: $email, 
        password: $password, 
    )
    {
        token
    }
  }
`