import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Layout>
                {/* <h2>{ data.site.siteMetadata.title}</h2> */}
            <h1>About Page</h1>
            </Layout>
        </div>
    )
}

export const query = graphql`
{
    allFile {
      totalCount
      nodes {
        relativePath
        size
        name
        extension
        ctime
      }
    }
  }
`

export default AboutPage