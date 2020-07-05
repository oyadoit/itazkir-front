import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client';  


import { AUTH_TOKEN } from './utils/constants';


const link = createUploadLink({
  uri: 'https://itazkir.herokuapp.com/graphql/'
});

// const link = new HttpLink({
//   uri: 'https://itazkir.herokuapp.com/graphql/'
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `jwt ${token}` : ''
    }
  }
})


const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN)
  client.resetStore();

}


ReactDOM.render(


  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,

  document.getElementById('root')

);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
