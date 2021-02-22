module.exports = {
    siteMetadata: {
        title: "はじめてのGatsby Site",
        author: "Reffect",
        category: ["Laravel", "Vue.js", "React"],
        user: { name: "John Doe", email: "john@example.com" },
    },
    /* Your site config here */
    plugins: [
        {
        resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        "gatsby-transformer-remark",
    ],
}

exports.onCreateNode = ({ node, getNode }) => {
    const { createFilePath } = require(`gatsby-source-filesystem`)
    exports.onCreateNode = ({ node, getNode, actions }) => {
        const { createNodeField } = actions
        if (node.internal.type === `MarkdownRemark`) {
            const slug = createFilePath({ node, getNode, basePath: `pages` })
            createNodeField({
            node,
            name: `slug`,
            value: slug,
            })
        }
    }
}