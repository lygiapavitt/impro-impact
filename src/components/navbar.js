/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Box, Flex, Link as RebassLink, Text } from "rebass"

const Navbar = props => (
    <Flex
        px={[10, 20, 30, 80, 100, 100]}
        py={33}
        width={1}
        alignItems="center"
        sx={{
            position: "fixed",
            borderTop: 0,
            borderLeft: 0,
        }}
    >
        <RebassLink variant="nav" color="text">
            <Text p={2}>{props.title}</Text>
        </RebassLink>
        <Box mx="auto" />
        {/* 
            <Link to="/page-2/">
                <RebassLink variant="nav">Go to page 2</RebassLink>
            </Link>
            */}
        <RebassLink variant="nav" px={50} color="text">
            Helvetia2050
        </RebassLink>
        <RebassLink variant="nav" px={50} color="text">
            Pride
        </RebassLink>
    </Flex>
)

Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: ``,
}

export default Navbar
