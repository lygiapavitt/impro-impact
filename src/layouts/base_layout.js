import React from "react"

import { ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { siteTitle } from "../helpers/globals"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const iconImage = graphql`
    fragment iconImage on File {
        childImageSharp {
            fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const BaseLayout = props => {
    const images = useStaticQuery(graphql`
        query {
            landingImage: file(
                relativePath: { eq: "helvetia2050/backgrounds/401.jpg" }
            ) {
                ...defaultImage
            }
            damianVeiga: file(
                relativePath: { eq: "landing/damian_veiga_2.jpg" }
            ) {
                ...defaultImage
            }
            lygiaPavitt: file(
                relativePath: { eq: "landing/lygia_pavitt.jpg" }
            ) {
                ...defaultImage
            }
            leoMoreno: file(relativePath: { eq: "landing/leo_moreno.jpg" }) {
                ...defaultImage
            }
            instagram: file(relativePath: { eq: "icons/instagram-icon.png" }) {
                ...iconImage
            }
            facebook: file(relativePath: { eq: "icons/facebook-icon.png" }) {
                ...iconImage
            }
            mail: file(relativePath: { eq: "icons/mail-icon.png" }) {
                ...iconImage
            }
        }
    `)

    const navref = React.createRef()
    const navbar = <Navbar ref={navref} title={siteTitle} images={images} />

    const DefaultLayoutPage = () => (
        <ParallaxProvider>
            <SEO title={siteTitle} />
            {navbar}
            {React.cloneElement(props.children, {
                navbar: navbar.ref,
                images: images,
            })}
            <Footer />
        </ParallaxProvider>
    )

    return <DefaultLayoutPage />
}

export default BaseLayout
