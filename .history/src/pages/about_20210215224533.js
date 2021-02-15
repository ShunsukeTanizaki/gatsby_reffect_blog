import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';

// const AboutPage = ({ data }) => {
//     return (
//         <div>
//             <Layout>
//                 <h2>{ data.site.siteMetadata.title}</h2>
//             <h1>About Page</h1>
//             </Layout>
//         </div>
//     )
// }

const About = props => {
    console.log(props)
    return (
      <div>
        <layout>
          <h2>{props.data.site.siteMetadata.title}</h2>
          <h1>About page</h1>
        </layout>
      </div>
    )
  }

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default AboutPage