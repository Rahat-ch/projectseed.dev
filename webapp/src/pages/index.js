import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth } from 'react-use-auth';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()
  const apolloData = useQuery(gql`
    query hello {
      hello {
        world
      }
    }
  `)
  const liveData = apolloData.data, loading = apolloData.loading;
  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Welcome to Project Seed Dev</h1>
      <button onClick={login}>Log in/Sign Up</button>
      {isAuthenticated() ? <p>Hello {user.name}</p> : null}
      {isAuthenticated() ? <img src={user.picture} alt="userprofileimage" /> : null}
      {loading ? <p>Loading...</p> : null}
      {liveData ? <p>{liveData.hello.world}</p> : null}
      <Link to="/home/">Go to home</Link>
    </Layout>
  )
}

export default IndexPage
