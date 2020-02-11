import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <h1>Welcome to Project Seed Dev</h1>
    <Link to="/home/">Go to home</Link>
  </Layout>
)

export default IndexPage
