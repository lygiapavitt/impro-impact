module.exports = {
    siteMetadata: {
        title: `Impro Impact`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        "gatsby-plugin-theme-ui",
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `white`,
                showSpinner: true,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto Mono`,
                        variants: [`300`, `600`],
                    },
                    {
                        family: `Montserrat`,
                        variants: [`200`, `200italic`, `500`],
                        subsets: [`latin`],
                    },
                    {
                        family: `Lato`,
                        variants: [`300`, `300italic`, `600`],
                        subsets: [`latin`],
                    },
                    {
                        family: `Alegreya Sans SC`,
                        variants: [`300`, `300italic`, `600`],
                        subsets: [`latin`],
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
