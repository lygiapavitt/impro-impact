import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import { titleQuery } from "./index"

import Navbar from "../components/navbar"
import HelvetiaLayout from "../components/helvetia_layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Helvetia2050 = () => {
    const data = useStaticQuery(titleQuery)
    const siteTitle = data.site.siteMetadata.title

    const navref = React.createRef()
    const navbar = <Navbar ref={navref} title={siteTitle} />

    const Helvetia2050Page = () => (
        <ParallaxProvider>
            <SEO title={siteTitle} />
            {navbar}
            <HelvetiaLayout navbar={navbar.ref} />
            <Footer />
        </ParallaxProvider>
    )

    return <Helvetia2050Page />
}

export default Helvetia2050
