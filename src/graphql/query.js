import gql from 'graphql-tag';

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