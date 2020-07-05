import gql from "graphql-tag";

//query the currrently loggedin user
export const ME = gql`
  query {
    currentUser {
      id
      email
      firstName
      lastName
      isCreator
      subscriptionSet {
        id
      }
      reminderSet {
        id
      }
    }
  }
`;

// // query me from cache
// export const ME_FROM_CACHE = gql`
//   query {
//     currentUser @client{
//       id
//       email
//       firstName
//       lastName
//       isCreator
//       subscriptionSet {
//         id
//       }
//       reminderSet {
//         id
//       }
//     }
//   }
// `;


//check if user is a creator b4 allowing access to route
export const IS_CREATOR = gql`
  query {
    currentUser{
      id
      email
      isCreator
    }
  }
`;

//query all the reminders a user can subscribe to
export const ALL_REMINDERS = gql`
  query {
    allReminders {
      name
      id
    }
  }
`;
//query the currently logged in user's subscriptions
export const CURRENT_USER_SUBSCRIPTIONS = gql`
  query {
    userSubscriptions {
      id
      reminder {
        id
        name
      }
    }
  }
`;
//contents created for each of the user subscriptions
export const USER_CONTENTS = gql`
  query {
    userContents {
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

export const SINGLE_REMINDER = gql`
  query content($id: Int!, $title: String!) {
    content(id: $id, title: $title) {
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

export const USER_CURRENT_REMINDER = gql`
  query {
    userReminders {
      id
      name
    }
  }
`;

export const USER__CONTENTS = gql`
  query {
    userContents {
      id
    }
  }
`;



export const ALL_CONTENTS = gql`
  query {
    allContents{
      id data title 
    }
}
`