import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the home page</h1>
    <Link to="/">Go back to the main page</Link>
  </Layout>
)

export default SecondPage
