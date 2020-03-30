import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Index = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const IndexPage = () => (
        <>
            <SEO title={data.site.siteMetadata.title} />
            <Navbar title={data.site.siteMetadata.title} />
            <Layout />
            <Footer />
        </>
    )

    return <IndexPage />
}

export default Index
