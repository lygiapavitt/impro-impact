module.exports = {
    siteMetadata: {
        title: `Impro Impact`,
        description: `« Impro impact » fait converger la pratique de l’improvisation théâtrale avec vos objectifs de sensibilisation du public. Grâce à l’impro, votre message devient interactif, ludique et mémorable !`,
        author: `@EpicMinimata`,
    },
    plugins: [
        "gatsby-plugin-theme-ui",
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icons/impact-icon.png`, // This path is relative to the root of the site.
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
                        family: `Montserrat`,
                        variants: [`200`, `200italic`, `500`],
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
