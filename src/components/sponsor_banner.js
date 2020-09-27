/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

import Title from "./title"

import content from "../pages-content/représentations"

import { Flex, Box, Link as RebassLink, Text } from "rebass"
import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"

const SponsorBanner = props => (
    <Flex
        alignItems="center"
        flexWrap="wrap"
        width={1}
        p="40px"
        sx={{ color: "background", bg: "accent", textAlign: "center" }}
    >
        <Box p={paddingBreakpoints} width={halfWidthBreakpoints}>
            <Title>Avec le soutien de</Title>
        </Box>
        <Flex width={halfWidthBreakpoints} flexWrap="wrap">
            <Flex
                alignItems="center"
                justifyContent="spaceEvenly"
                px={paddingBreakpoints}
                width={1}
            >
                <Box width={1 / 8}></Box>
                <Box width={3 / 4}>
                    <Img fluid={props.sponsorLogo1.childImageSharp.fluid}></Img>
                </Box>
                <Box width={1 / 8}></Box>
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="spaceEvenly"
                px={paddingBreakpoints}
                width={1}
            >
                <Box width={1 / 8}></Box>
                <Box width={3 / 4}>
                    <Img fluid={props.sponsorLogo2.childImageSharp.fluid}></Img>
                </Box>
                <Box width={1 / 8}></Box>
            </Flex>
        </Flex>
    </Flex>
)

export default SponsorBanner
