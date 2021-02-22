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
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
    }
}