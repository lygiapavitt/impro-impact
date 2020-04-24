import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

export const titleQuery = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

// export const siteTitle = data.site.siteMetadata.title

const Index = () => {
    /*const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)*/

    const data = useStaticQuery(titleQuery)
    const siteTitle = data.site.siteMetadata.title

    const navref = React.createRef()
    const navbar = <Navbar ref={navref} title={siteTitle} />

    const IndexPage = () => (
        <ParallaxProvider>
            <SEO title={siteTitle} />
            {navbar}
            <Layout navbar={navbar.ref} />
            <Footer />
        </ParallaxProvider>
    )

    return <IndexPage />
}

export default Index
