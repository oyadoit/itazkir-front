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


export const VERIFY_TOKEN = gql`
  mutation verifyToken( $token: String! ){
    verifyToken(token: $token){
      payload
    }
  }
`

export const SUBSCRIBE = gql`
  mutation createSubscription($reminderId: Int){
    createSubscription(reminderId: $reminderId){
      id
      user{
        id email
      }
      reminder{
        name id owner{id email}
      }
    }
  }
`