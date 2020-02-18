import React from 'react';
import { navigate } from 'gatsby';
import { AuthProvider } from 'react-use-auth';
import { ApolloProvider } from 'react-apollo-hooks';

import { client } from "./src/apollo";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider navigate={navigate} auth0_domain={process.env.GATSBY_AUTH0DOMAIN} auth0_client_id={process.env.GATSBY_AUTH0CLIENTID}>
      {element}
    </AuthProvider>
  </ApolloProvider>
);