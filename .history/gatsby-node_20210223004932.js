const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)



exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
        type SiteSiteMetadata {
            author: Author
            siteUrl: String
            social: Social
        }

        type Author {
            name: String
            summary: String
        }

        type Social {
            twitter: String
        }

        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
            fields: Fields
        }

        type Frontmatter {
            title: String
            description: String
            date: Date @dateformat
        }

        type Fields {
            slug: String
        }
    `)
},
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}

