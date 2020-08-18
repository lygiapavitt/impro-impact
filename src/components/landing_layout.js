/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "./title"
import TeamMember from "./team_member"
import content from "../pages-content/landing"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Link as RebassLink } from "rebass"
import Img from "gatsby-image"
import Scroll from "react-scroll-to-element"
import { useColorMode } from "theme-ui"

import { Waypoint } from "react-waypoint"

import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"

const LandingLayout = props => {
    const setNavbarTransparent = () => {
        props.navbar.current.setTransparent()
    }
    const setNavbarBlur = () => {
        props.navbar.current.setBlur()
    }
    const setNavbarOpaque = () => {
        props.navbar.current.setOpaque()
    }

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("default")

    React.useEffect(() => {
        props.navbar.current.hideAllChapters()
    }, [])

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={
                    props.images.landingImage.childImageSharp.fluid.src
                }
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
                            <RebassLink href="https://www.facebook.com/Helvetia2050-107783550783658/">
                                <Img
                                    fluid={
                                        props.images.facebook.childImageSharp
                                            .fluid
                                    }
                                ></Img>
                            </RebassLink>
                        </Box>
                    </Parallax>
                    <Box width={iconWidthBreakpoints} m={paddingBreakpoints}>
                        <RebassLink href="mailto:impro-impact@pm.me">
                            <Img
                                fluid={props.images.mail.childImageSharp.fluid}
                            ></Img>
                        </RebassLink>
                    </Box>
                    <Parallax x={[0, 100]}>
                        <Box
                            width={iconWidthBreakpoints}
                            m={paddingBreakpoints}
                        >
                            <RebassLink href="https://www.instagram.com/helvetia2050/">
                                <Img
                                    fluid={
                                        props.images.instagram.childImageSharp
                                            .fluid
                                    }
                                ></Img>
                            </RebassLink>
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

            <Waypoint onEnter={setNavbarOpaque} />

            <Hero sx={{ bg: "background" }}>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <TeamMember
                        name={content.damian.title}
                        avatar={
                            props.images.damianVeiga.childImageSharp.fluid.src
                        }
                        // content={content.damian.content}
                        content=""
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                    <TeamMember
                        name={content.lygia.title}
                        avatar={
                            props.images.lygiaPavitt.childImageSharp.fluid.src
                        }
                        // content={content.lygia.content}
                        content=""
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                    <TeamMember
                        name={content.leo.title}
                        avatar={
                            props.images.leoMoreno.childImageSharp.fluid.src
                        }
                        // content={content.leo.content}
                        content=""
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                </Flex>
            </Hero>

            {/* <Hero></Hero> */}
        </>
    )
}

export default LandingLayout
