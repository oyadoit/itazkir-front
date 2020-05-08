import gql from 'graphql-tag';

//query the currrently loggedin user
export const CURRENT_USER = gql`
   query {
            currentUser{
            id
            lastLogin
            email
            firstName
            lastName
            isActive
            phone        
        }
    }
`

//query all the reminders a user can subscribe to 
export const ALL_REMINDERS = gql`
   query{
        allReminders {
            name id 
        }
    }
`
//query the currently logged in user's subscriptions
export const CURRENT_USER_SUBSCRIPTIONS = gql`
    query {
        userSubscriptions{
            id
            reminder{
                id
                name 
            }
        }
    }
`
//contents created for each of the user subscriptions
export const USER_CONTENTS = gql`
    query {
        userContents{
 	        id title data reminder{
                id name owner{
                    id email firstName lastName
                }
            }
    	}
    }
`