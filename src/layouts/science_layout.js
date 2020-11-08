/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import content from "../pages-content/science"
import Link from "../components/custom_link"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"

import { contentTitleFontSizeBreakpoints } from "../helpers/globals"

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

const ScienceLayout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(
                relativePath: { eq: "science/science_landing.jpg" }
            ) {
                ...defaultImage
            }
            middleImage: file(
                relativePath: { eq: "science/science_second.jpg" }
            ) {
                ...defaultImage
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
        props.navbar.current.setTransparent()
    }
    const setNavbarBlur = () => {
        props.navbar.current.setBlur()
    }
    const setNavbarOpaque = () => {
        props.navbar.current.setOpaque()
    }

    const Chapters = props => <Box>science</Box>

    const contentRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])
    React.useEffect(() => {
        // props.navbar.current.setScienceChaptersVisible(Chapters)
        setScrollToElementArray([
            () => window.scrollTo(0, contentRef.current.offsetTop),
        ])
    }, [])

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("science")

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
                sx={{
                    backgroundRepeat: "repeat-y",
                }}
            >
                <Box my="auto"></Box>
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    {content.landing.title}
                </Title>
                <Box my="auto"></Box>
                <Text
                    my="20px"
                    mr="20px"
                    ml="auto"
                    sx={{
                        textAlign: "center",
                        fontSize: [10],
                    }}
                >
                    This page has been designed using resources from
                    <Link href="https://www.freepik.com/" inline>
                        Freepik.com
                    </Link>
                </Text>
                <ScrollDownIndicator
                    onClick={() => {
                        scrollToElementArray[0](contentRef)
                    }}
                />
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Box ref={contentRef}>
                <Hero id="content">
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <Flex alignItems="center" width={halfWidthBreakpoints}>
                            <Box
                                p={paddingBreakpoints}
                                mx="auto"
                                my={stackedParallaxedYMargin}
                            >
                                <Parallax y={[30, -30]}>
                                    <Title width={1} bg="background">
                                        {content.paragraph1.title}
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
                                    {content.paragraph1.content}
                                </Parallax>
                            </Box>
                        </Flex>
                    </Flex>
                </Hero>
            </Box>

            <Waypoint onEnter={setNavbarOpaque} />

            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.middleImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    {content.hero1.title}
                </Title>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Hero>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            width={1}
                            sx={{ textAlign: "justify" }}
                        >
                            <Parallax y={[-30, 30]}>
                                {content.paragraph2.content}
                            </Parallax>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            my={stackedParallaxedYMargin}
                            sx={{
                                fontSize: contentTitleFontSizeBreakpoints,
                            }}
                        >
                            <Parallax y={[30, -30]}>
                                <Title width={1}>
                                    {content.paragraph2.title}
                                </Title>
                            </Parallax>
                        </Box>
                    </Flex>
                </Flex>
            </Hero>

            <Waypoint onEnter={setNavbarOpaque} />
        </>
    )
}

export default ScienceLayout
