import React from "react"
import Layout from '../components/layout';


const AboutPage = ({ data }) => {
    return (
        <div>
            <Layout>
                <h2>{ data.site.siteMetadata.title}</h2>
            <h1>About Page</h1>
            </Layout>
        </div>
    )
}

export const query = graphl`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default AboutPage