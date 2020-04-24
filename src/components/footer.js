/** @jsx jsx */
import { jsx } from "theme-ui"

import { Flex, Link as RebassLink, Text } from "rebass"

const Layout = props => (
    <Flex px={100} py={33} alignItems="center">
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <RebassLink href="https://twitter.com/EpicMinimata">
                <Text
                    sx={{
                        color: "primary",
                        textDecoration: "none",
                        boxShadow: "none",
                        border: "none",
                    }}
                >
                    Love
                </Text>
            </RebassLink>
        </footer>
    </Flex>
)

export default Layout
