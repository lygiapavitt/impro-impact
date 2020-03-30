/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import TeamMember from "../components/team_member"
import { Hero, ScrollDownIndicator } from "react-landing-page"

import { Box, Flex, Card } from "rebass"

const Layout = () => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "401.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 10000000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            damianVeiga: file(relativePath: { eq: "damian_veiga.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 10000000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lygia: file(relativePath: { eq: "lygia.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 10000000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            leoMoreno: file(relativePath: { eq: "leo_moreno.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 10000000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const half_width_breakpoints = [1, 1, 1 / 2, 1 / 2, 1 / 2, 1 / 2]
    const padding_breakpoints = [2, 2, 3, 4, 4, 5]

    const Main = () => (
        <>
            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        fontSize: [24, 32, 40, 56, 64, 80],
                        letterSpacing: [
                            "0.18em",
                            "0.19em",
                            "0.20em",
                            "0.21em",
                            "0.22em",
                            "0.23em",
                        ],
                    }}
                >
                    IMPRO IMPACT
                </Title>
                <ScrollDownIndicator />
            </Hero>

            <Hero>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <Flex alignItems="center" width={half_width_breakpoints}>
                        <Box p={padding_breakpoints} mx="auto">
                            <Title width={1}>
                                5, 4, 3, 2, 1... Impro Impact
                            </Title>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" width={half_width_breakpoints}>
                        <Box
                            p={padding_breakpoints}
                            mx="auto"
                            width={1}
                            sx={{ textAlign: "justify" }}
                        >
                            Apparently we had reached a great height in the
                            atmosphere, for the sky was a dead black, and the
                            stars had ceased to twinkle. By the same illusion
                            which lifts the horizon of the sea to the level of
                            the spectator on a hillside, the sable cloud beneath
                            was dished out, and the car seemed to float in the
                            middle of an immense dark sphere, whose upper half
                            was strewn with silver. Looking down into the dark
                            gulf below, I could see a ruddy light streaming
                            through a rift in the clouds.
                        </Box>
                    </Flex>
                </Flex>
            </Hero>

            <Hero sx={{ bg: "background" }}>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <TeamMember
                        name="Damian Veiga"
                        avatar={data.damianVeiga.childImageSharp.fluid.src}
                    />
                    <TeamMember
                        name="Lygia"
                        avatar={data.lygia.childImageSharp.fluid.src}
                    />
                    <TeamMember
                        name="Leo Moreno"
                        avatar={data.leoMoreno.childImageSharp.fluid.src}
                    />
                </Flex>
            </Hero>
        </>
    )

    return <Main></Main>
}

export default Layout
