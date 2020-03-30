/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import React from "react"

import { Box, Flex, Link as RebassLink, Text } from "rebass"

const Layout = props => (
    <Flex px={100} py={33} alignItems="center">
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <RebassLink color="white" href="https://twitter.com/EpicMinimata">
                Love
            </RebassLink>
        </footer>
    </Flex>
)

export default Layout
