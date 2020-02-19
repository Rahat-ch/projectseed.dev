import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth } from 'react-use-auth';
import { useQuery, useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const LoginButton = () => {
  const { isAuthenticated, user, userId, login, logout } = useAuth();
  const [updateUser, { data }] = useMutation(
    gql`
      mutation updateUser($userId: String) {
        updateUser(userId: $userId) {
          userId
        }
      }
    `,
    {
      variables: {
        userId,
      }
    }
  )

  useEffect(() => {
    updateUser()
  }, [userId])

  console.log(data);

  return !isAuthenticated() ? (
    <button onClick={login}> Get Started</button>
  ) : (
      <button onClick={logout}> Logout </button>
    )
}

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()

  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Welcome to Project Seed Dev</h1>
      <LoginButton />
      {isAuthenticated() ? <p>Hello {user.name}</p> : null}
      {isAuthenticated() ? <img src={user.picture} alt="userprofileimage" /> : null}
      <Link to="/home/">Go to home</Link>
    </Layout>
  )
}

export default IndexPage
