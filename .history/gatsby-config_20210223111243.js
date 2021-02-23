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
    plugins: [
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 700,
                        },
                    },
                ],
            },
        },
    ],
    
}
