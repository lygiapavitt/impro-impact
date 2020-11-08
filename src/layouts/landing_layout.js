/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import Title from "../components/title"
import TeamMember from "../components/team_member"
import Link from "../components/custom_link"
import InfoBanner from "../components/info_banner"

import content from "../pages-content/landing"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Link as RebassLink } from "rebass"
import Img from "gatsby-image"
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

    const scrollRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])

    React.useEffect(() => {
        props.navbar.current.hideAllChapters()
        setScrollToElementArray([
            () => window.scrollTo(0, scrollRef.current.offsetTop),
        ])
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
                            <RebassLink
                                href="https://www.facebook.com/Helvetia2050-107783550783658/"
                                target="_blank"
                            >
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
                        <RebassLink
                            href="mailto:info@impro-impact.ch"
                            target="_blank"
                        >
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
                            <RebassLink
                                href="https://www.instagram.com/helvetia2050/"
                                target="_blank"
                            >
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

                <ScrollDownIndicator
                    onClick={() => scrollToElementArray[0]()}
                />
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <InfoBanner></InfoBanner>

            <Box ref={scrollRef}>
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
                                    « Impro impact » fait converger la pratique
                                    de l’improvisation théâtrale avec vos
                                    objectifs de sensibilisation du public.
                                    Grâce à l’impro, votre message devient
                                    interactif, ludique et mémorable ! Nous
                                    proposons une gamme de spectacle sur les
                                    thématiques suivantes : la crise écologique
                                    («
                                    <Link to="/helvetia2050/" inline>
                                        Helvetia2050
                                    </Link>
                                    »), l’égalité des genres («
                                    <Link to="/genre/" inline>
                                        Un genre de spectacle
                                    </Link>
                                    ») et la communication scientifique («
                                    <Link to="/science/" inline>
                                        Sciences en scène
                                    </Link>
                                    »). Nous proposons également une palette
                                    d’ateliers pratiques en lien avec ces
                                    thématiques. Ensemble, nous trouvons des
                                    solutions concrètes et sur-mesure pour
                                    diffuser ce qui vous tient à cœur.
                                </Parallax>
                            </Box>
                        </Flex>
                    </Flex>
                </Hero>
            </Box>

            <Waypoint onEnter={setNavbarOpaque} />

            <Hero id="content">
                <Flex alignItems="center" flexWrap="wrap-reverse" width={1}>
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

            <Hero sx={{ bg: "background" }}>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <TeamMember
                        name={content.damian.title}
                        avatar={
                            props.images.damianVeiga.childImageSharp.fluid.src
                        }
                        content={content.damian.content}
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                    <TeamMember
                        name={content.lygia.title}
                        avatar={
                            props.images.lygiaPavitt.childImageSharp.fluid.src
                        }
                        content={content.lygia.content}
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                    <TeamMember
                        name={content.leo.title}
                        avatar={
                            props.images.leoMoreno.childImageSharp.fluid.src
                        }
                        content={content.leo.content}
                    />
                    {/* <Waypoint onEnter={setNavbarBlur} /> */}
                </Flex>
            </Hero>
        </>
    )
}

export default LandingLayout
