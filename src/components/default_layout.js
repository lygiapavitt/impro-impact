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

const DefaultLayout = props => {
    const images = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "401.jpg" }) {
                ...defaultImage
            }
            damianVeiga: file(relativePath: { eq: "damian_veiga_2.jpg" }) {
                ...defaultImage
            }
            lygiaPavitt: file(relativePath: { eq: "lygia_pavitt.jpg" }) {
                ...defaultImage
            }
            leoMoreno: file(relativePath: { eq: "leo_moreno.jpg" }) {
                ...defaultImage
            }
            instagram: file(relativePath: { eq: "instagram-icon.png" }) {
                ...iconImage
            }
            facebook: file(relativePath: { eq: "facebook-icon.png" }) {
                ...iconImage
            }
            mail: file(relativePath: { eq: "mail-icon.png" }) {
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

export default DefaultLayout
