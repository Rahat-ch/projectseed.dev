import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth } from 'react-use-auth';

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()
  console.log(user)
  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Welcome to Project Seed Dev</h1>
      <button onClick={login}>Log in/Sign Up</button>
      {isAuthenticated() ? <p>Hello {user.name}</p> : null}
      {isAuthenticated() ? <img src={user.picture} alt="userprofileimage" /> : null}
      <Link to="/home/">Go to home</Link>
    </Layout>
  )
}

export default IndexPage
