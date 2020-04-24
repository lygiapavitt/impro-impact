/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import TeamMember from "../components/team_member"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex } from "rebass"
import Img from "gatsby-image"
import Scroll from "react-scroll-to-element"

import { Waypoint } from "react-waypoint"

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

const Layout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "401.jpg" }) {
                ...defaultImage
            }
            damianVeiga: file(relativePath: { eq: "damian_veiga.jpg" }) {
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
        }
    `)
    const halfWidthBreakpoints = [1, 1, 1 / 2, 1 / 2, 1 / 2, 1 / 2]
    const stackedParallaxedYMargin = [5, 5, 2, 2, 2, 2]
    const paddingBreakpoints = [2, 2, 3, 4, 4, 5]
    const iconWidthBreakpoints = [
        "2em",
        "2.1em",
        "2.2em",
        "2.3em",
        "2.4em",
        "2.5em",
    ]
    const lettersSpacingBreakpoints = [
        "0.18em",
        "0.19em",
        "0.20em",
        "0.21em",
        "0.22em",
        "0.23em",
    ]

    const setNavbarTransparent = () => {
        console.log("transparent")
        props.navbar.current.setTransparent()
    }
    const setNavbarBlur = () => {
        console.log("blur")
        props.navbar.current.setBlur()
    }
    const setNavbarOpaque = () => {
        console.log("opaque")
        props.navbar.current.setOpaque()
    }

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    <Parallax x={[-70, 10]}>IMPRO</Parallax>
                    <Parallax x={[100, -7]}> IMPACT</Parallax>
                </Title>

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Parallax x={[0, -100]}>
                        <Box
                            width={iconWidthBreakpoints}
                            m={paddingBreakpoints}
                        >
                            <Img
                                fluid={data.facebook.childImageSharp.fluid}
                            ></Img>
                        </Box>
                    </Parallax>
                    <Parallax x={[0, 100]}>
                        <Box
                            width={iconWidthBreakpoints}
                            m={paddingBreakpoints}
                        >
                            <Img
                                fluid={data.instagram.childImageSharp.fluid}
                            ></Img>
                        </Box>
                    </Parallax>
                </Flex>
                <Scroll type="id" element="content">
                    <ScrollDownIndicator />
                </Scroll>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Hero id="content">
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            my={stackedParallaxedYMargin}
                        >
                            <Parallax y={[30, -30]}>
                                <Title width={1}>
                                    5, 4, 3, 2, 1... Impro Impact
                                </Title>
                            </Parallax>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            width={1}
                            sx={{ textAlign: "justify" }}
                        >
                            <Parallax y={[-30, 30]}>
                                Apparently we had reached a great height in the
                                atmosphere, for the sky was a dead black, and
                                the stars had ceased to twinkle. By the same
                                illusion which lifts the horizon of the sea to
                                the level of the spectator on a hillside, the
                                sable cloud beneath was dished out, and the car
                                seemed to float in the middle of an immense dark
                                sphere, whose upper half was strewn with silver.
                                Looking down into the dark gulf below, I could
                                see a ruddy light streaming through a rift in
                                the clouds.
                            </Parallax>
                        </Box>
                    </Flex>
                </Flex>
            </Hero>

            <Waypoint onEnter={setNavbarOpaque} />

            <Hero sx={{ bg: "background" }}>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <TeamMember
                        name="Damian Veiga"
                        avatar={data.damianVeiga.childImageSharp.fluid.src}
                    />
                    <Waypoint onEnter={setNavbarBlur} />
                    <TeamMember
                        name="Lygia Pavitt"
                        avatar={data.lygiaPavitt.childImageSharp.fluid.src}
                    />
                    <Waypoint onEnter={setNavbarBlur} />
                    <TeamMember
                        name="Léo Moreno"
                        avatar={data.leoMoreno.childImageSharp.fluid.src}
                    />
                    <Waypoint onEnter={setNavbarBlur} />
                </Flex>
            </Hero>

            <Hero></Hero>
        </>
    )
}

export default Layout
