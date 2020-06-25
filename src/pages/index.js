import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query SiteGreeting {
      site {
        siteMetadata {
          description, greeting
        }
      }
    }
  `)

    return (

        <Layout>
            <SEO title="Home"/>
            <h1>{data.site.siteMetadata.greeting}</h1>
            <p>{data.site.siteMetadata.description}</p>
        </Layout>
    )
}
export default IndexPage

//<Link to="/page-2/">Go to page 2</Link>
