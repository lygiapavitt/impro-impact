/** @jsx jsx */
import { jsx } from "theme-ui"

import Title from "../components/title"

import content from "../pages-content/représentations"

import { Flex, Box, Link as RebassLink, Text } from "rebass"
import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"

const InfoBanner = () => (
    <Flex
        alignItems="center"
        flexWrap="wrap"
        width={1}
        p="40px"
        sx={{ color: "background", bg: "accent", textAlign: "center" }}
    >
        <Flex width={halfWidthBreakpoints} flexWrap="wrap" alignItems="center">
            <Box p={paddingBreakpoints} width={1}>
                <Title>Prochaines représentations</Title>
            </Box>
            <Box p={paddingBreakpoints} width={1}>
                <Title>{content.spectacle}</Title>
            </Box>
        </Flex>
        <Flex width={halfWidthBreakpoints} flexWrap="wrap">
            <Box p={paddingBreakpoints} width={1}>
                <Text>{content.date}</Text>
            </Box>
            <Box p={paddingBreakpoints} width={1}>
                <Text>{content.place}</Text>
            </Box>
        </Flex>
    </Flex>
)

export default InfoBanner
