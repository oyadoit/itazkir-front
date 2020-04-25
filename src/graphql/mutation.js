import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation tokenAuth(
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

export const CREATE_USER = gql`
  mutation createUser(
      $firstName: String!, 
      $email: String!, 
      $password: String!, 
      $lastName: String!
    ) {
    createUser(
        firstName: $firstName,
        email: $email, 
        password: $password, 
        lastName:$lastName
    ) {
        user
            {
                id
                firstName
                lastName
                email
            }
    }
   
  }
`