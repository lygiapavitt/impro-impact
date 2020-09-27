/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import content from "../pages-content/helvetia"
import Link from "../components/custom_link"
import TeamMember from "../components/team_member"
import InfoBanner from "../components/info_banner"
import SponsorBanner from "../components/sponsor_banner"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"
import Img from "gatsby-image"
import { Waypoint } from "react-waypoint"

import WordCloud from "react-d3-cloud"

import ImageGallery from "react-image-gallery"

import { contentTitleFontSizeBreakpoints } from "../helpers/globals"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const HelvetiaLayout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "26.jpg" }) {
                ...defaultImage
            }
            middleImage: file(relativePath: { eq: "9.jpg" }) {
                ...defaultImage
            }
            logoUnige: file(relativePath: { eq: "unige_logo.png" }) {
                ...defaultImage
            }
            logoAcademie: file(relativePath: { eq: "academie_logo.png" }) {
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
    const setNavbarOpaque = () => {
        props.navbar.current.setOpaque()
    }

    const contentRef = useRef(null)
    const descriptionRef = useRef(null)
    const solutionsRef = useRef(null)
    const equipeRef = useRef(null)
    const photosRef = useRef(null)
    const retoursRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])

    const Chapters = navbar => (
        <Flex>
            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav" to="/helvetia2050">
                    <Text
                        onClick={() => {
                            scrollToElementArray[0](contentRef)
                            navbar.closeMenu()
                        }}
                    >
                        Problème
                    </Text>
                </Link>
            </Box>

            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav">
                    <Text
                        onClick={() => {
                            navbar.closeMenu()
                            scrollToElementArray[0](descriptionRef)
                        }}
                    >
                        Description
                    </Text>
                </Link>
            </Box>

            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav">
                    <Text
                        onClick={() => {
                            navbar.closeMenu()
                            scrollToElementArray[0](solutionsRef)
                        }}
                    >
                        Solutions
                    </Text>
                </Link>
            </Box>

            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav">
                    <Text
                        onClick={() => {
                            navbar.closeMenu()
                            scrollToElementArray[0](equipeRef)
                        }}
                    >
                        Equipe
                    </Text>
                </Link>
            </Box>

            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav">
                    <Text
                        onClick={() => {
                            navbar.closeMenu()
                            scrollToElementArray[0](photosRef)
                        }}
                    >
                        Photos
                    </Text>
                </Link>
            </Box>

            <Box mx="auto" width={1 / 3}></Box>
            <Box mx="auto" width={2 / 3}>
                <Link variant="nav">
                    <Text
                        onClick={() => {
                            navbar.closeMenu()
                            scrollToElementArray[0](retoursRef)
                        }}
                    >
                        Retours
                    </Text>
                </Link>
            </Box>
        </Flex>
    )

    React.useEffect(() => {
        // console.log("jambon")
        // setScrollToElementArray([
        //     scrollRef => window.scrollTo(0, scrollRef.current.offsetTop),
        // ])
        // props.navbar.current.setHelvetiaChaptersVisible(Chapters)
        setScrollToElementArray([
            () => window.scrollTo(0, contentRef.current.offsetTop),
        ])
    }, [])

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("helvetia")

    const TitleLetter = props => (
        <Parallax y={props.parallax}>
            <Box width={iconWidthBreakpoints} m={paddingBreakpoints}>
                <Title
                    {...props}
                    css={{
                        "@keyframes slightRotation": {
                            from: {
                                transform: "rotate(" + props.rotate[0] + "deg)",
                            },
                            to: {
                                transform: "rotate(" + props.rotate[1] + "deg)",
                            },
                        },

                        animationName: "slightRotation",
                        animationDuration: "" + props.duration + "s",
                        animationTimingFunction: "ease-in-out",
                        animationDirection: "alternate",
                        animationIterationCount: "infinite",
                        fontWeight: "400",
                    }}
                >
                    {props.children}
                </Title>
            </Box>
        </Parallax>
    )

    const wordCloudData = [
        { text: "'La grande Classe'", value: 1000 },
        { text: "'L'impro avec le Cenovis était super'", value: 200 },
        { text: "'Du jamais vu de l'oeil humain'", value: 800 },
        { text: "'Very, very cool", value: 100000 },
        { text: "'j'ai ri'", value: 10 },
    ]

    const fontSizeMapper = word => Math.log2(word.value) * 4
    const paddingMapper = word => Math.log2(word.value)
    const rotation = 17

    const images = [
        {
            original: data.landingImage.childImageSharp.fluid.src,
            thumbnail: data.landingImage.childImageSharp.fluid.src,
        },
        {
            original: data.landingImage.childImageSharp.fluid.src,
            thumbnail: data.landingImage.childImageSharp.fluid.src,
        },
        {
            original: data.landingImage.childImageSharp.fluid.src,
            thumbnail: data.landingImage.childImageSharp.fluid.src,
        },
        {
            original: data.landingImage.childImageSharp.fluid.src,
            thumbnail: data.landingImage.childImageSharp.fluid.src,
        },
    ]

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.6)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        marginTop: "-280px",
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    HELVETIA
                </Title>

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <TitleLetter
                        parallax={[0, 15]}
                        rotate={[-7, 7]}
                        duration={6}
                    >
                        2
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 33]}
                        rotate={[-7, 7]}
                        duration={4}
                    >
                        0
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 51]}
                        rotate={[-7, 7]}
                        duration={7}
                    >
                        5
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 81]}
                        rotate={[-7, 7]}
                        duration={5}
                    >
                        0
                    </TitleLetter>
                </Flex>
                <ScrollDownIndicator
                    onClick={() => {
                        scrollToElementArray[0](contentRef)
                    }}
                />
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <InfoBanner></InfoBanner>

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

            <Box ref={descriptionRef}>
                <Hero id="description">
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
            </Box>

            <Waypoint onEnter={setNavbarOpaque} />

            <SponsorBanner
                sponsorLogo1={data.logoUnige}
                sponsorLogo2={data.logoAcademie}
            />

            {/* <Hero
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
                    Vos solutions
                </Title>
            </Hero> */}

            {/* <Box ref={solutionsRef}>
                <Hero id="solutions">
                    <ImageGallery items={images} />
                </Hero>
            </Box>

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
                    Equipe
                </Title>
            </Hero> */}

            {/* <Box ref={equipeRef}>
                <Hero id="equipe" sx={{ bg: "background" }}>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name="Damian Veiga"
                            avatar={
                                props.images.damianVeiga.childImageSharp.fluid
                                    .src
                            }
                            // content={content.damian.content}
                            content=""
                        />
                        <TeamMember
                            name="Lygia Pavitt"
                            avatar={
                                props.images.lygiaPavitt.childImageSharp.fluid
                                    .src
                            }
                            // content={content.lygia.content}
                            content=""
                        />
                        <TeamMember
                            name="Léo Moreno"
                            avatar={
                                props.images.leoMoreno.childImageSharp.fluid.src
                            }
                            // content={content.leo.content}
                            content=""
                        />
                    </Flex>
                </Hero>
            </Box> */}

            {/* <Hero
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
                    Photos
                </Title>
            </Hero>

            <Box ref={photosRef}>
                <Hero id="photos">
                    <ImageGallery items={images} />
                </Hero>
            </Box>

            <Hero
                bg="rgba(255, 255, 255, 0.6)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    Retours du public
                </Title>
            </Hero>

            <Box ref={retoursRef}>
                <Hero id="retours" bg="rgba(255, 255, 255, 0.6)">
                    <WordCloud
                        data={wordCloudData}
                        fontSizeMapper={fontSizeMapper}
                        padding={paddingMapper}
                        font="Montserrat, sans-serif"
                        rotate={rotation}
                    />
                </Hero>
            </Box> */}
        </>
    )
}

export default HelvetiaLayout
