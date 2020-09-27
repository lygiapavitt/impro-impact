/** @jsx jsx */
import { jsx } from "theme-ui"

import { Flex, Box, Link as RebassLink, Text } from "rebass"
import { screenWidthItemsPaddingBreakpoints } from "../helpers/globals"

const Layout = () => (
    <footer>
        <Flex
            px={screenWidthItemsPaddingBreakpoints}
            py={33}
            alignItems="center"
        >
            <Box>
                © {new Date().getFullYear()}, Built with {` `}
                <RebassLink
                    href="https://twitter.com/EpicMinimata"
                    target="_blank"
                >
                    <Text
                        sx={{
                            color: "primary",
                            display: "inline-block",
                        }}
                    >
                        Love
                    </Text>
                </RebassLink>
            </Box>
            <Box mx="auto"></Box>
            <Box>
                <RebassLink href="mailto:info@impro-impact.ch" target="_blank">
                    <Text
                        sx={{
                            color: "primary",
                            display: "inline-block",
                        }}
                    >
                        info@impro-impact.ch
                    </Text>
                </RebassLink>
            </Box>
        </Flex>
    </footer>
)

export default Layout
