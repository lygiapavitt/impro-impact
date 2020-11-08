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
            landingImage: file(
                relativePath: { eq: "helvetia2050/backgrounds/26.jpg" }
            ) {
                ...defaultImage
            }
            middleImage: file(
                relativePath: { eq: "helvetia2050/backgrounds/9.jpg" }
            ) {
                ...defaultImage
            }
            teamImage: file(
                relativePath: { eq: "helvetia2050/backgrounds/16.jpg" }
            ) {
                ...defaultImage
            }
            logoUnige: file(
                relativePath: { eq: "helvetia2050/sponsors/unige_logo.png" }
            ) {
                ...defaultImage
            }
            logoAcademie: file(
                relativePath: { eq: "helvetia2050/sponsors/academie_logo.png" }
            ) {
                ...defaultImage
            }

            anouckMuller: file(
                relativePath: { eq: "helvetia2050/people/anouckMuller.JPG" }
            ) {
                ...defaultImage
            }
            aureliaPlaton: file(
                relativePath: { eq: "helvetia2050/people/aureliaPlaton.JPG" }
            ) {
                ...defaultImage
            }
            cecileJeannet: file(
                relativePath: { eq: "helvetia2050/people/cecileJeannet.JPG" }
            ) {
                ...defaultImage
            }
            damianVeiga: file(
                relativePath: { eq: "helvetia2050/people/damianVeiga.JPG" }
            ) {
                ...defaultImage
            }
            deborahChirenti: file(
                relativePath: { eq: "helvetia2050/people/deborahChirenti.JPG" }
            ) {
                ...defaultImage
            }
            filipeFonseca: file(
                relativePath: { eq: "helvetia2050/people/filipeFonseca.JPG" }
            ) {
                ...defaultImage
            }
            jeromePache: file(
                relativePath: { eq: "helvetia2050/people/jeromePache.JPG" }
            ) {
                ...defaultImage
            }
            leoMoreno: file(
                relativePath: { eq: "helvetia2050/people/leoMoreno.JPG" }
            ) {
                ...defaultImage
            }
            lygiaPavitt: file(
                relativePath: { eq: "helvetia2050/people/lygiaPavitt.JPG" }
            ) {
                ...defaultImage
            }
            sarahRusalen: file(
                relativePath: { eq: "helvetia2050/people/sarahRusalen.JPG" }
            ) {
                ...defaultImage
            }
            thomasDemaurex: file(
                relativePath: { eq: "helvetia2050/people/thomasDemaurex.JPG" }
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
            <Box width={iconWidthBreakpoints}>
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
                        // fontWeight: "500",
                        fontSize: "2em",
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
                    justifyContent="space-between"
                    flexWrap="wrap"
                    width={0.4}
                >
                    <TitleLetter
                        parallax={[0, 50]}
                        rotate={[-7, 7]}
                        duration={6}
                    >
                        2
                    </TitleLetter>
                    <TitleLetter
                        parallax={[-150, 150]}
                        rotate={[-7, 7]}
                        duration={4}
                    >
                        0
                    </TitleLetter>
                    <TitleLetter
                        parallax={[-50, 125]}
                        rotate={[-7, 7]}
                        duration={7}
                    >
                        5
                    </TitleLetter>
                    <TitleLetter
                        parallax={[-200, 250]}
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
            </Box> */}

            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.teamImage.childImageSharp.fluid.src}
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
            </Hero>

            <Box ref={equipeRef}>
                <Hero sx={{ bg: "background" }}>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.jeromePache.title}
                            avatar={data.jeromePache.childImageSharp.fluid.src}
                            content={content.people.jeromePache.content}
                        />
                        <TeamMember
                            name={content.people.deborahChirenti.title}
                            avatar={
                                data.deborahChirenti.childImageSharp.fluid.src
                            }
                            content={content.people.deborahChirenti.content}
                        />
                        <TeamMember
                            name={content.people.sarahRusalen.title}
                            avatar={data.sarahRusalen.childImageSharp.fluid.src}
                            content={content.people.sarahRusalen.content}
                        />
                    </Flex>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.anouckMuller.title}
                            avatar={data.anouckMuller.childImageSharp.fluid.src}
                            content={content.people.anouckMuller.content}
                        />
                        <TeamMember
                            name={content.people.leoMoreno.title}
                            avatar={data.leoMoreno.childImageSharp.fluid.src}
                            content={content.people.leoMoreno.content}
                        />
                        <TeamMember
                            name={content.people.lygiaPavitt.title}
                            avatar={data.lygiaPavitt.childImageSharp.fluid.src}
                            content={content.people.lygiaPavitt.content}
                        />
                    </Flex>
                </Hero>
                <Hero sx={{ bg: "background" }}>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.damianVeiga.title}
                            avatar={data.damianVeiga.childImageSharp.fluid.src}
                            content={content.people.damianVeiga.content}
                        />
                        <TeamMember
                            name={content.people.aureliaPlaton.title}
                            avatar={
                                data.aureliaPlaton.childImageSharp.fluid.src
                            }
                            content={content.people.aureliaPlaton.content}
                        />
                        <TeamMember
                            name={content.people.cecileJeannet.title}
                            avatar={
                                data.cecileJeannet.childImageSharp.fluid.src
                            }
                            content={content.people.cecileJeannet.content}
                        />
                    </Flex>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.thomasDemaurex.title}
                            avatar={
                                data.thomasDemaurex.childImageSharp.fluid.src
                            }
                            content={content.people.thomasDemaurex.content}
                            numberOfPeople={2}
                        />
                        <TeamMember
                            name={content.people.filipeFonseca.title}
                            avatar={
                                data.filipeFonseca.childImageSharp.fluid.src
                            }
                            content={content.people.filipeFonseca.content}
                            numberOfPeople={2}
                        />
                    </Flex>
                </Hero>
            </Box>

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

            <SponsorBanner
                sponsorLogo1={data.logoUnige}
                sponsorLogo2={data.logoAcademie}
            />
        </>
    )
}

export default HelvetiaLayout
