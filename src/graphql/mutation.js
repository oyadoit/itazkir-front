import gql from "graphql-tag";

// login user
export const LOGIN = gql`
  mutation tokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

// register new user
export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $email: String!
    $password: String!
    $lastName: String!
  ) {
    createUser(
      firstName: $firstName
      email: $email
      password: $password
      lastName: $lastName
    ) {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const VERIFY_TOKEN = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;

// subscribe to recieve reminders
export const SUBSCRIBE = gql`
  mutation createSubscription($reminderId: Int) {
    createSubscription(reminderId: $reminderId) {
      id
      user {
        id
        email
      }
      reminder {
        name
        id
        owner {
          id
          email
        }
        contentSet {
          id
          title
          data
        }
      }
    }
  }
`;

// create content for a particular reminder
export const CREATE_CONTENT = gql`
  mutation createReminderContent(
    $data: String!
    $title: String!
    $reminderId: Int
  ) {
    createContent(data: $data, title: $title, reminderId: $reminderId) {
      id
      title
      data
      reminder {
        id
        name
        owner {
          id
          email
          firstName
          lastName
        }
      }
    }
  }
`;



//  create reminder users can subscribe to
export const CREATE_REMINDER = gql`
  mutation createReminder($name: String!) {
    createReminder(name: $name) {
      id
      name
      owner {
        id
        email
        firstName
        lastName
        isCreator
      }
    }
  }
`;

export const DELETE_CONTENT = gql`
  mutation deleteContent($id: Int!){
    deleteContent(id: $id){
      message
    }
  }
`

export const CREATE_NEW_CONTENT = gql`
mutation ($data: String $file: Upload $reminderId: Int! $title: String!){
  createContent(data: $data, file: $file, reminderId:$reminderId, title: $title){
    id
    data
    title
    fileLocation
    reminder {
        id
        name
        owner {
          id
          email
          firstName
          lastName
        }
      }
  }
}
`;


export const UPDATE_CONTENT = gql`
mutation updateContent($id: Int, $data: String, $file: Upload,  $title: String  ){
  updateContent (id: $id, data: $data, title: $title, file: $file){
     id data title  
  }
}
`