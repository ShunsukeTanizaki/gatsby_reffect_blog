import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Layout>
                <h1>About Page</h1>
                <table>
                    <thead>
                        <tr>パス</tr>
                        <tr>サイズ</tr>
                        <tr>作成時間</tr>
                    </thead>
                    <tbody>
                        {data.allFile.nodes.map(node => (
                            <tr>{node.relativePath}</tr>
                            <tr>{node.size}</tr>
                            <tr>{node.ctime}</tr>
                        ))}
                    </tbody>
                </table>
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